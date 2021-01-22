<?php
/**
 * Plugin Name: CAH Faculty/Staff Directory
 * Description: Displays faculty and staff information for a given department or school in the UCF College of Arts and Humanities
 * Version: 4.0.0
 * Author: Mike W. Leavitt
 */

defined( 'ABSPATH' ) or die( 'No direct access plzthx' );

// Define useful constants
define( 'CAH_FACULTY_STAFF_4__PLUGIN_FILE', __FILE__ );
define( 'CAH_FACULTY_STAFF_4__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'CAH_FACULTY_STAFF_4__PLUGIN_URI', plugin_dir_url( __FILE__ ) );

$cfs_namespace = "UCF\\CAH\\WordPress\\Plugins\\FacultyStaff";

require_once CAH_FACULTY_STAFF_4__PLUGIN_DIR . "includes/cah-faculty-staff-4-setup.php";
require_once CAH_FACULTY_STAFF_4__PLUGIN_DIR . "includes/cah-faculty-staff-4-template-mgr.php";

add_action( 'init', [ "$cfs_namespace\\FacultyStaffSetup", "setup" ], 10, 0 );
add_action( 'init', [ "$cfs_namespace\\FacultyStaffTemplateMgr", "setup" ], 10, 0 );
?>