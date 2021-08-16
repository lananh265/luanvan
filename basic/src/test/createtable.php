<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "test";

$conn = new mysqli($servername, $username, $password, $database);
if (!$conn){
    die("Connection failed: " . mysqli_connect_error());

}else{
    echo "Connected successfully";
    
    $sql = "CREATE TABLE users (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50),
        register TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, unique (username)
        )";
        
        if ($conn->query($sql) === TRUE) {
            echo "Table users created successfully";
          } else {
            echo "Error creating table: " . $conn->error;
          }
}

$conn->close();
?>
