<?php
/**
 * A static helper class for managing WordPress templates so that we don't get
 * 404s when we're trying to directly access Vue Router subpages
 * 
 * @author Mike W. Leavitt
 * @version 4.0.0
 */

namespace UCF\CAH\WordPress\Plugins\FacultyStaff;

final class FacultyStaffTemplateMgr
{
    // Just keeping the slug in one place, so it's easier to change
    private static $_slug = 'faculty-staff';

    private function __construct() {} // Prevents instantiation


    /**
     * Sets up the actions and filters we'll need to manage the templates and
     * intercept 404s for pages that should be handled by Vue Router
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @return void
     */
    public static function setup()
    {
        add_action( 'template_redirect', [ __CLASS__, 'handle_404' ], 10, 0 );
        add_action( 'template_include', [ __CLASS__, 'set_template' ] );

        add_filter( 'the_title', [ __CLASS__, 'change_title' ] );
    }


    /**
     * If the page is a subpage of our Vue App, replaces the global $post
     * object with the $post object of the base App page.
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @return void
     */
    public static function handle_404()
    {
        // Since this will be executed for every request, abort if it's not 404
        if( !is_404() ) return;

        $slug = self::$_slug;

        // If the path contains our desired page slug, then it's a page we're
        // interested in. This should support a page at any theoretical site
        // depth, as well as Routes of arbitrary complexity
        if( stripos( $_SERVER['REQUEST_URI'] , "/$slug/" ) !== false )
        {
            global $post;

            // This query should grab our base App page
            $args = [
                'name' => $slug,
                'post_type' => 'page',
                'post_status' => 'publish',
                'numberpost' => 1,
            ];

            $results = get_posts( $args );

            // If we find it, switch out our $post object.
            if( $results )
            {
                $post = $results[0];
            }
        }
    }


    /**
     * Sets the path to the page template for WordPress to use. In this case,
     * the default will be set to the 404 template for the theme (or parent
     * theme), so we want to change it to our basic app page template.
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @param string $template  The template path WP has pre-determined
     * 
     * @return string $template  The new template value
     */
    public static function set_template( $template ) : string
    {
        $slug = self::$_slug;
        global $post;

        // If $wp_query->is_404 is true, but the $post->post_name matches our
        // desired slug, then it's one that's hit our handle_404() function,
        // and we therefore want to change it
        if( is_404() && $slug === $post->post_name )
        {
            // Check the theme folder for an existing template
            if( file_exists( get_stylesheet_directory() . "/page-$slug.php" ) )
            {
                $template = get_stylesheet_directory() . "/page-$slug.php";
            }
            // Check the parent theme folder, if any
            /*
            else if( file_exists( get_template_directory() . "/page-$slug.php" ) )
            {
                $template = get_template_directory() . "/page-$slug.php";
            }
            */
            // Otherwise use our basic, pre-packaged one
            else
            {
                $template = CAH_FACULTY_STAFF_4__PLUGIN_DIR . "templates/page-$slug.php";
            }
        }
        else if( $slug === $post->post_name )
        {
            $template = CAH_FACULTY_STAFF_4__PLUGIN_DIR . "templates/page-$slug.php";
        }

        // Send back the template path, changed or not.
        return $template;
    }


    /**
     * Change the post title, for anything that relies on that being correct
     * 
     * @author Mike W. Leavitt
     * @since 4.0.0
     * 
     * @param string $title  The original title, probably "404 Page Not Found"
     * 
     * @return string $title  The new (or old) title
     */
    public static function change_title( $title ) : string
    {
        global $post;

        // If $wp_query->is_404 is true, but the $post->post_name matches our
        // desired slug, then it's one that's hit our handle_404() function,
        // and we therefore want to change it
        if( is_404() && self::$_slug === $post->post_name )
        {
            return $post->post_title;
        }
        else
        {
            return $title;
        }
    }
}
?>