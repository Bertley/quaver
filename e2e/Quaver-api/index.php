<?php
require 'DbConn.php'; 

$db = DbConn::conn();

try{
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $results = $db->query('SELECT * FROM artist')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);

}
catch (PDOException $e){
    print("Error connecting to SQL Server ");
    die(print_r($e));
}
