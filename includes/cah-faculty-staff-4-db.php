<?php
namespace UCF\CAH\WordPress\Plugins\FacultyStaff;

defined( 'ABSPATH' ) or die( "No direct access plzthx" );

if( !file_exists( CAH_FACULTY_STAFF_4__PLUGIN_DIR . 'includes/_db-auth.php' ) )
{
    wp_die( 'No database authorization found for CAH Faculty Staff v4.0.0' );
}

require_once CAH_FACULTY_STAFF_4__PLUGIN_DIR . 'includes/_db-auth.php';

use \mysqli;
use \mysqli_result;

class DBHelper
{
    // Private members
    private $_db;

    // Public methods
    public function __construct()
    {
        $this->_connect();
    }


    public function __destruct()
    {
        $this->_disconnect();
    }


    public function db() : ?mysqli
    {
        if( is_null( $this->_db ) )
        {
            $this->_connect();
        }

        return $this->_db;
    }


    public function query( string $sql, bool $response = true ) : ?mysqli_result
    {
        $result = mysqli_query( $this->db(), $sql );

        if( ( $response && !$result ) || ( $response && $result instanceof mysqli_result && $result->num_rows === 0 ) )
        {
            if( mysqli_errno( $this->db() ) )
            {
                $this->_error( mysqli_errno( $this->db() ), mysqli_error( $this->db() ), $sql );
            }

            return null;
        }
        else
        {
            return $result;
        }
    }


    // Private methods
    private function _connect()
    {
        $this->_db = mysqli_connect( DBAuth::HOST, DBAuth::USER, DBAuth::PASS, DBAuth::DB );

        if( mysqli_connect_errno() )
        {
            $this->_error( mysqli_connect_errno(), mysqli_connect_error(), '', true );
            $this->_db = null;
        }
        else 
        {
            mysqli_set_charset( $this->_db, DBAuth::CHARSET );
        }
    }


    private function _disconnect()
    {
        mysqli_close( $this->_db );
        $this->_db = null;
    }


    private function _error( int $errno, string $message, string $sql = '', bool $on_connect = false )
    {
        $output = "MySQL " . ( $on_connect ? "connection " : "" ) . "error $errno: $message";

        if( !empty( $sql ) )
        {
            $output .= "\n\tSQL: $sql";
        }

        error_log( $output );
    }
}
?>