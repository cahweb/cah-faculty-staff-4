<?php
namespace UCF\CAH\WordPress\Plugins\FacultyStaff;

require_once 'cah-faculty-staff-4-query-types.php';

final class SQLGenerator
{
    private function __construct() {} // prevents instantiation

    public static function get_sql( int $type, ... $args ) : string
    {
        $sql = '';

        switch( $type )
        {
            case QueryType::FACULTY:
                $sql = self::_faculty( ... $args );
                break;

            case QueryType::SUBDEPARTMENT:
                $sql = self::_subdepartment( ... $args );
                break;

            case QueryType::EDU:
                $sql = self::_edu( ... $args );
                break;

            case QueryType::PUB:
                $sql = self::_pub( ... $args );
                break;

            case QueryType::COURSES:
                $sql = self::_courses( ... $args );
                break;

            case QueryType::TERMS:
                $sql = self::_terms();
                break;

            default:
                break;
        }

        return $sql;
    }


    private static function _faculty( $dept, $parent_dept ) : string
    {
        if( is_array( $dept ) )
        {
            $dept = implode( ', ', $dept );
        }

        if( is_array( $parent_dept ) )
        {
            $parent_dept = implode( ', ', $parent_dept );
        }

        $sql = "SELECT DISTINCT u.id, u.lname, u.fname, u.mname, u.email, u.phone, u.photo_path AS photo, u.photo_extra, u.interests, t.id AS title_id, CONCAT_WS( ' ', t.description, ud.title_description) AS title, ud.prog_title_dept AS prog_title, ud.prog_title_dept_short AS title_short, ac.id AS subdept, a.ordinal, u.activities, u.awards, u.research, u.has_cv, u.homepage, u.biography AS bio, u.office, r.room, r.`desc` AS room_desc, r.building FROM users AS u LEFT JOIN users_departments AS ud ON u.id = ud.user_id LEFT JOIN academics AS a ON a.user_id = u.id LEFT JOIN academic_categories AS ac ON ac.id = a.academic_id LEFT JOIN titles AS t ON t.id = ud.title_id LEFT JOIN ( SELECT rooms.id, rooms.room_number AS room, buildings.short_description AS `desc`, buildings.building_number AS building FROM rooms LEFT JOIN buildings ON rooms.building_id = buildings.id  ) AS r ON r.id = u.room_id WHERE ud.department_id IN ( $parent_dept ) AND a.academic_id IN( $dept, 74, 75, 79 ) AND ( ud.affiliation = 'active' AND ud.active = 1 AND ud.show_web = 1 )";

        return $sql;
    }


    private static function _subdepartment( $dept, bool $multi_dept = false ) : string
    {
        $sql = '';

        if( is_array( $dept ) )
        {
            $dept = implode( ', ', $dept );
        }

        if( $multi_dept )
        {
            $sql = "SELECT id, description, level FROM academic_categories WHERE department_id IN( $dept ) ";
        }
        else
        {
            $sql = "SELECT id, description, department_id FROM academic_categories WHERE department_id IN( $dept ) OR id IN( 74, 75, 79 ) ORDER BY department_id, description";
        }

        return $sql;
    }


    private static function _edu( $id ) : string
    {
        $sql = "SELECT education.field, education.institution, education.year AS degYear, `degrees`.short_description AS `degree` FROM cah.education LEFT JOIN cah.degrees ON education.degrees_id = `degrees`.id WHERE education.user_id = $id ORDER BY education.year";

        return $sql;
    }


    private static function _pub( int $id ) : string
    {
        $sql = "SELECT pubs.forthcoming, DATE_FORMAT( pubs.publish_date, '%M %Y' ) AS pubDate, pub_cats.plural_description AS pubType, pubs.citation FROM cah.publications AS pubs LEFT JOIN cah.publications_categories AS pub_cats ON pubs.publication_id = pub_cats.id WHERE pubs.user_id = $id AND approved = 1 ORDER BY pub_cats.level, pub_cats.plural_description, pubs.publish_date DESC";

        return $sql;
    }


    private static function _courses( $id, $term, $aux ) : string
    {
        $sql = "SELECT courses.id, number, IF( `description` IS NULL, 'No Description Available', `description` ) AS `description`, CONCAT( prefix, catalog_number ) AS catalogref, syllabus_file, term, section, title, instruction_mode, session, CONCAT( meeting_days, ' ', class_start, ' - ', class_end ) AS dateandtime FROM courses LEFT JOIN users ON courses.user_id = users.id WHERE $term$aux AND ( user_id = $id OR suser_id = $id ) ORDER BY term, catalogref, title, number";

        return $sql;
    }

    private static function _terms() : string
    {
        $sql_start = "SELECT DISTINCT term, CAST( SUBSTRING( term, LOCATE( ' ', term ) ) AS UNSIGNED ) + CAST( IF( SUBSTRING_INDEX( term, ' ', 1 ) = 'Fall', 1, 0 ) AS UNSIGNED ) AS ordering FROM courses WHERE term != CONCAT( 'Summer ', ( YEAR( NOW() ) + 1 ) )";

        $sql_end = " ORDER BY ordering DESC, term DESC";
            
        $year = date('Y');
        $today = strtotime( date('d.m.') . $year );
        $start = strtotime( "05.03.$year" );

        /*
        if( $today > $start )
        */
            return $sql_start . $sql_end . " LIMIT 0, 5";
        /*
        else
            return "$sql_start AND term != CONCAT( 'Summer ', YEAR( NOW() ) ) AND term != CONCAT( 'Fall ', YEAR( NOW() ) ) AND term != CONCAT( 'Spring ', ( YEAR( NOW() ) + 1 ) )$sql_end";
        */
    }
}
?>