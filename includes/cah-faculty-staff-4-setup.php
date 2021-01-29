<?php
/**
 * Static helper class to set up the CAH Faculty/Staff v4 plugin
 * 
 * @author Mike W. Leavitt
 * @version 4.0.0
 */

namespace UCF\CAH\WordPress\Plugins\FacultyStaff;

require_once 'cah-faculty-staff-4-db.php';
require_once 'cah-faculty-staff-4-sql.php';
require_once 'cah-faculty-staff-4-query-types.php';

final class FacultyStaffSetup
{

    /**
     * @var string $_handle  The handle we'll use as a base for WP registration
     */
    private static $_handle = "cah-faculty-staff-4";

    /**
     * @var string $_shortcode  The shortcode we'll register everything to
     */
    private static $_shortcode = "faculty-staff-4";

    /**
     * @var DBHelper $_db  The database helper object
     */
    private static $_db = null;

    /**
     * @var int|string $_parent_dept  The parent department code, in either int or string form
     */
    private static $_parent_dept = null;

    /**
     * @var array $_subdepts  The final list of subdepartment codes
     */
    private static $_subdepts = null;

    private function __construct() {} // prevents instantiation

    // Public methods

    /**
     * Sets up the shortcode and Vue scripts to load, as well as AJAX handling
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @return void
     */
    public static function setup()
    {
        add_action( 'wp_enqueue_scripts', [ __CLASS__, 'register_scripts' ], 5, 0 );
        add_action( 'wp_enqueue_scripts', [ __CLASS__, 'maybe_enqueue_scripts' ], 10, 0 );
        add_shortcode( self::$_shortcode, [ __CLASS__, 'shortcode' ] );

        // AJAX setup
        add_action( 'wp_ajax_' . self::$_handle, [ __CLASS__, 'handle_ajax' ], 10, 0 );
        add_action( 'wp_ajax_nopriv_' . self::$_handle, [ __CLASS__, 'handle_ajax' ], 10, 0 );
    }


    /**
     * Registers the scripts, so they're there if we need to enqueue them
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @return void
     */
    public static function register_scripts()
    {
        $handle = self::$_handle;

        $path = CAH_FACULTY_STAFF_4__PLUGIN_DIR . '/dist';
        $uri = CAH_FACULTY_STAFF_4__PLUGIN_URI . '/dist';

        // The "chunk" script, which I believe Vue uses to pre-load a few things
        wp_register_script(
            "$handle-script-chunk",
            "$uri/js/chunk-$handle.js",
            [],
            filemtime( "$path/js/chunk-$handle.js" ),
            true
        );

        // The main app script
        wp_register_script(
            "$handle-script",
            "$uri/js/$handle.js",
            [ "$handle-script-chunk" ],
            filemtime( "$path/js/$handle.js" ),
            true
        );

        // The main app CSS file
        wp_register_style(
            "$handle-style",
            "$uri/css/$handle.css",
            [],
            filemtime( "$path/css/$handle.css" ),
            'all'
        );
    }


    /**
     * Checks to see if our shortcode is present and, if so, loads our scripts
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @return void
     */
    public static function maybe_enqueue_scripts()
    {
        $handle = self::$_handle;
        $shortcode = self::$_shortcode;

        global $post;
        if( !is_object( $post ) ) return;

        // If the post content contains our shortcode, we want to enqueue our scripts
        if( stripos( $post->post_content, "[$shortcode" ) !== false )
        {
            wp_enqueue_script( "$handle-script" );

            // Passing data to JavaScript on the front-end, so Vue can see it
            wp_localize_script( "$handle-script", "wpVars", [
                    'baseUrl' => self::_get_full_slug( $post ),
                    'ajaxUrl' => admin_url( 'admin-ajax.php' ),
                    'pluginDirURI' => CAH_FACULTY_STAFF_4__PLUGIN_URI
                ]
            );

            wp_enqueue_style( "$handle-style" );
        }
    }


    /**
     * Handles shortcode output to create target div element for Vue app
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @param array $atts  Any attribute key/value pairs passed in the shortcode
     * 
     * @return void
     */
    public static function shortcode( $atts = [] )
    {
        $a = shortcode_atts( [
                'dept' => 11,
                'img_shape' => 'circle',
                'multi_dept' => 'false',
                'has_advising' => 'true',
                'include_interests' => 'true',
                'filterable' => 'true',
                'vertical' => 'false',
                'format' => 'a-z',
                'prog_title_only' => 'false',
                'tiered' => 'false',
            ],
            $atts
        );

        /*
         * Change text "true" and "false" values to their Boolean counterparts
         * Using array_keys() so as not to screw up the Iterator on $a, because PHP is dumb
         */
        foreach( array_keys( $a ) as $key )
        {
            if( $a[$key] === 'true' || $a[$key] === 'false' )
            {
                $a[$key] = $a[$key] === 'true' ? true : false;
            }
        }

        ob_start();
        ?>
        <div class="app-container">
            <?= wp_nonce_field( self::$_handle, 'wp-nonce' ); // Create a nonce that we'll use for AJAX validation ?>
            <input type="hidden" name="options" value="<?= htmlentities( json_encode( $a ) ) ?>">
            <div id="<?= self::$_handle . "-app" ?>"></div>
        </div>
        <?php
        // Should echo the output, rather than returning it
        echo ob_get_clean();
    }


    /**
     * AJAX handler function. Mostly checks $_POST['get'] to determine which
     * follow-on function needs to fire
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @return void
     */
    public static function handle_ajax()
    {
        // Validating the nonce
        if ( !check_ajax_referer( self::$_handle, 'wpNonce' ) )
        {
            die( "Invalid nonce." );
        }

        // Checking to make sure we actually have data in $_POST
        if( !isset( $_POST ) || empty( $_POST ) )
        {
            die( "No POST data" );
        }

        // TODO: implement AJAX routing/requests to DB

        switch( $_POST['get'] )
        {
            case 'faculty':
                $retval = self::_get_faculty( $_POST );
                break;

            case 'subdepts':
                $retval = self::_get_subdepartments( $_POST );
                break;

            case 'init':
                $retval = self::_initial_request( $_POST );
                break;

            case 'edu-pub':
                $retval = self::_education_publication( $_POST );
                break;

            case 'courses':
                $retval = self::_courses( $_POST );
                break;

            default:
                $retval = 'Requested information not recognized';
                break;
        }

        echo json_encode( $retval );
        
        // Always call exit() or die() at the end of AJAX scripts
        die();
    }


    // Private methods

    /**
     * Recursively retrieves the full path (from the root folder) of the base Vue app page.
     * This is passed to Vue so the router rewrites the URLs seamlessly
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @param Object (ref) $post  A reference to the global $post object, for reading
     * @param string $slug  The existing slug string, for recursive calls
     * 
     * @return string $current_slug  The full slug path--should match the REQUEST_URI of the base app page
     */
    private static function _get_full_slug( &$post, string $slug = "" ) : string
    {
        // If we have an existing string, prepends the current post's slug to it
        $current_slug = !empty( $slug ) ? "$post->post_name/$slug" : $post->post_name;

        // Post parent 0 means no parent, so we're done
        if( $post->post_parent === 0 )
        {
            return $current_slug;
        }
        // Otherwise run it again, get the parent post, and pass it the slug we've got so far
        else
        {
            return self::_get_full_slug( get_post( $post->post_parent ), $current_slug );
        }
    }


    /**
     * Retrieves information about faculty members in a given department.
     * 
     * @param array $data  A reference to the $_POST superglobal
     * 
     * @return array $faculty_list  The list of faculty members and their information
     */
    private static function _get_faculty( array &$data )
    {
        // Grab our database helper object
        $db = self::_get_db();

        // Get our list of departments, whether we already have them or not
        $dept;
        if( is_null( self::$_subdepts ) )
        {
            $depts = self::_get_subdepartments( $data );
            $dept = [];

            foreach( $depts as $d )
                $dept[] = $d['id'];
        }
        else
            $dept = self::$_subdepts;

        // Create the container we'll return
        $faculty_list = [];

        // Get our faculty query SQL from the SQLGenerator class and run the query
        $sql = SQLGenerator::get_sql( QueryType::FACULTY, $dept, self::$_parent_dept );
        $result = $db->query( $sql );

        if( $result )
        {
            // There may be multiple entries for the same faculty member, so we don't want duplicate IDs
            $current_id = 0;

            while( $row = mysqli_fetch_assoc( $result ) )
            {
                // If we've got a new ID, we'll want to store all the information
                if( $current_id !== intval( $row['id'] ) )
                {
                    // Save the new ID as the current one
                    $current_id = intval( $row['id'] );

                    /*
                     * Add all the attributes to their entry in the $faculty_list array, except for the ones
                     * there might be multiples of
                     */
                    $keys_to_skip = [
                        'subdept',
                        'title',
                        'title_short',
                        'prog_title',
                        'title_id',
                        'ordinal',
                    ];
                    
                    foreach( $row as $key => $value )
                    {
                        if( in_array( $key, $keys_to_skip ) )
                            continue;
                        
                        if( $key === 'phone' && !is_null( $value ) ) {
                            $value = self::_format_phone_us( $value );
                        }

                        $faculty_list[$current_id][$key] = $value;
                    }

                    $faculty_list[$current_id]['infoRetrieved'] = false;
                    $faculty_list[$current_id]['edu'] = [];
                    $faculty_list[$current_id]['pub'] = [];
                    $faculty_list[$current_id]['courses'] = [];
                }

                // Add the faculty member's title for this entry by subdepartment
                $faculty_list[$current_id]['subdept'][$row['subdept']][] = [
                    'id' => intval( $row['subdept'] ),
                    'title' => trim( $row['title'] ),
                    'prog_title' => trim( $row['prog_title'] ),
                    'title_short' => trim( $row['title_short'] ),
                    'title_id' => intval( $row['title_id'] ),
                    'ordinal' => !is_null( $row['ordinal'] ) ? $row['ordinal'] : 100,
                ];

            }

            // Free the memory from the query
            mysqli_free_result( $result );
        }

        // Return the final list
        return $faculty_list;
    }


    /**
     * Retrieves the list of subdepartments and some data about them for a given parent department
     * 
     * @param array $data  A reference to the $_POST superglobal
     * 
     * @return array $subdept_list  An array of the subdepartments and their names, IDs, etc.
     */
    private static function _get_subdepartments( array &$data )
    {
        // Grab our DBHelper object
        $db = self::_get_db();

        $dept = $data['dept'];

        // A reference to the parent department's actual row ID
        $parent_lookup = [];

        // The list of subdepartments to return
        $subdept_list = [];

        /*
         * If we have a "multi-dept" -- that is, a department that is a kind of umbrella
         * for a group of other departments, we'll have to do a bit of extra work (though
         * not *too* much)
         */
        if( $data['multiDept'] )
        {
            // Get our subdepartment query with the multi_dept parameter set to true and run the query.
            $sql = SQLGenerator::get_sql( QueryType::SUBDEPARTMENT, $dept, true );
            $result = $db->query( $sql );

            // We only want to continue if we have something.
            if( !$result )
                return false;

            /*
             * Refresh the container for our departments, since the values are about to change (the static
             * member stays the same)
             */
            $dept = [];

            while( $row = mysqli_fetch_assoc( $result ) )
            {
                // Add the department value to the array we're about to query for the list of subdepartments
                $dept[] = $row['level'];

                // Add the actual ID in the table to the lookup, for later
                $parent_lookup[$row['level']] = $row['id'];

                // Add the parent departments to the return array
                $subdept_list[$row['id']] = [
                    'name' => $row['description'],
                    'id' => $row['id'],
                    'parent' => 0,
                ];
            }

            // Free the memory from the query result
            mysqli_free_result( $result );
        }

        // Assign our parent department and save it to our static member variable for later
        self::$_parent_dept = $dept;

        // Get the SQL for the subdepartment query itself and run it
        $sql = SQLGenerator::get_sql( QueryType::SUBDEPARTMENT, $dept );
        $result = $db->query( $sql );

        if( $result )
        {
            // Empty out the departments, because we won't need them
            $dept = [];

            while( $row = mysqli_fetch_assoc( $result ) )
            {
                // Add subdepartment info as an array to the return array
                $new_dept = [
                    'name' => $row['description'],
                    'id' => $row['id'],
                    'parent' => $data['multiDept'] && isset( $parent_lookup[$row['department_id']] ) ? $parent_lookup[$row['department_id']] : 0,
                ];

                $subdept_list[$row['id']] = $new_dept;

                /* 
                 * Add the subdepartment ID to our list, so we can save it when we're done (unless
                 * it's one of the Admin/advising type departments departments
                 */
                if( !in_array( $row['id'], [74, 75, 79] ) )
                {
                    $dept[] = $row['id'];
                }
            }

            // Storing for the instance so we don't have to run this query twice on init
            self::$_subdepts = $dept;
        }

        // Return the list of subdepartments
        return $subdept_list;
    }


    /**
     * Runs both the subdepartment and faculty queries and passes all the data back. Since the _get_faculty() function
     * ends up needing to basically run the _get_subdepartments() function anyway, when we're calling it at app
     * initialization, we might as well keep from having to run the query more than once.
     * 
     * @param array $data  corresponds to the $_POST superglobal, passed to the function
     * 
     * @return array $payload  Both the subdepartment and the faculty data in a single package
     */
    private static function _initial_request( array &$data )
    {
        $payload = [
            'subdepts' => self::_get_subdepartments( $data ),
            'faculty' => self::_get_faculty( $data ),
        ];

        return $payload;
    }


    private static function _education_publication( array &$data )
    {
        $db = self::_get_db();

        $id = $data['userID'];

        $sql = SQLGenerator::get_sql( QueryType::EDU, $id );
        $result = $db->query( $sql );

        $edu = [];

        if( $result ) {
            while( $row = mysqli_fetch_assoc( $result ) ) {

                $edu[] = [
                    'year' => $row['degYear'],
                    'degree' => $row['degree'],
                    'institution' => $row['institution'],
                    'field' => $row['field'],
                ];
            }

            mysqli_free_result( $result );
        }

        $sql = SQLGenerator::get_sql( QueryType::PUB, $id );
        $result = $db->query( $sql );

        $pub = [];

        if( $result ) {
            while( $row = mysqli_fetch_assoc( $result ) ) {

                $pub[] = [
                    'pubDate' => $row['pubDate'],
                    'pubType' => $row['pubType'],
                    'forthcoming' => $row['forthcoming'],
                    'citation' => $row['citation'],
                ];
            }

            mysqli_free_result( $result );
        }

        $payload = [
            'edu' => $edu,
            'pub' => $pub,
        ];

        return $payload;
    }


    private static function _courses( array &$data )
    {
        $db = self::_get_db();

        $terms = [];
        $sql_terms = [];

        $term_list = '';
        $sql_aux = '';
        $current_term = '';

        $summer_flag = false;

        $sql = SQLGenerator::get_sql( QueryType::TERMS );
        $result = $db->query( $sql );

        if( $result ) {
            while( $row = mysqli_fetch_assoc( $result ) ) {

                if( $row['term'] != '-' ) {
                    $terms[] = $row['term'];
                    $sql_terms[] = "'{$row['term']}'";
                }
            }

            if( !empty( $sql_terms ) ) {
                $term_list = "`term` IN( " . implode( ', ', $sql_terms ) . " ) ";
            }

            \mysqli_free_result( $result );

            $current_term = self::_get_current_semester();
        }

        $sql = SQLGenerator::get_sql( QueryType::COURSES, $data['userID'], $term_list, $sql_aux );
        $result = $db->query( $sql );

        if( !$result ) {
            return [];
        }

        $term_courses = [];

        while( $row = mysqli_fetch_assoc( $result ) ) {

            $term_idx = trim( $row['term'] );

            if( stripos( $term_idx, 'summer' ) !== false ) {
                $summer_flag = true;
            }

            if( empty( $term_courses[$term_idx] ) ) {
                $term_courses[$term_idx] = [];
            }

            $term_courses[$term_idx][] = [
                'number' => $row['number'],
                'catalogRef' => $row['catalogref'],
                'title' => $row['title'],
                'instructionMode' => $row['instruction_mode'],
                'session' => $row['session'],
                'dateTime' => $row['dateandtime'],
                'syllabusFile' => $row['syllabus_file'],
                'section' => $row['section'],
                'description' => $row['description'],
            ];
        }

        mysqli_free_result( $result );

        return $term_courses;
    }


    private static function _get_current_semester()
    {
        $now = getdate();
        $term = "";

        switch( $now[ 'mon' ] ) {

            case 10:
            case 11:
            case 12: // The Fall has already started, so start with Spring the following year.
                $term = "Spring " . ( intval( $now['year'] ) + 1 );
                break;

            case 1:
            case 2: // Spring again, but without adding to the year.
                $term = "Spring {$now['year']}";
                break;

            case 3:
            case 4:
            case 5:
            case 6: // The Spring semester, Summer is upcoming.
                $term = "Summer {$now['year']}";
                break;

            default: // Otherwise, we're focused on Fall
                $term = "Fall {$now['year']}";
                break;
        }

        return $term; // Return whatever we've come up with.
    }


    /**
     * A function to get the database connection, which makes sure we're not opening and closing
     * connections unnecessarily, for the sake of efficiency
     * 
     * @return DBHelper self::$_db
     */
    private static function _get_db() : DBHelper
    {
        // Check whether the DBHelper object has been created. If not, create it.
        if( is_null( self::$_db ) )
        {
            self::$_db = new DBHelper();
        }

        // Return the DBHelper object
        return self::$_db;
    }


    /**
     * Takes a given phone number input and formats it as a U.S.
     * number. If it's not able to be formatted that way, we just
     * send it straight back.
     *
     * @param string $phone  The phone number to try and format
     * 
     * @return string  The formatted (or original) number.
     */
    private static function _format_phone_us( string $phone ) : string {
        if( !isset( $phone ) ) return "";

        $phone = preg_replace( "/[^0-9]/", "", $phone );
        switch( strlen( $phone ) ) {

            case 7: // It's a "local" number, without an area code or country code.
                return preg_replace( "/(\d{3})(\d{4})/", "$1-$2", $phone );
                break;
            case 10: // It's a US number with area code, but no country code.
                return preg_replace( "/(\d{3})(\d{3})(\d{4})/", "($1) $2-$3", $phone );
                break;
            case 11: // It's a US number with the leading country code, as well.
                return preg_replace( "/(\d)(\d{3})(\d{3})(\d{4})/", "+$1 ($2) $3-$4", $phone );
                break;
            default: // It's not a US number, so just bounce it back.
                return $phone;
                break;
        }
    }
}
?>