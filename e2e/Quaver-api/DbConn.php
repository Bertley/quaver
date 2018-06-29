<?php

class Dbconn
{
    private static $dsn = 'mysql:host=localhost;dbname=edialu';
    private static $username = 'bertley';
    private static $password = 'Ethelbert_1';
    private static $db;

    private  function  __construct()
    {
    }

    public static function conn(){
        if(!isset(self::$db)){
            try {
                self::$db = new PDO(self::$dsn, self::$username, self::$password);
            }catch (PDOException $e){
                echo $e->getMessage();
            }
        }

        return self::$db;
    }
}

