<?php 
   
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "pg_data";
    $conn = "";

    try{
        $conn = mysqli_connect($db_server, $db_user, $db_pass , $db_name);
        if($conn){
            echo"you are connected";
        }
    }
    catch(mysqli_sql_exception){
        echo"could not connected";
    }

   
?>