<?php



$servername = "localhost";
$username = "root";
$password = "";
$database = "test";

$conn = mysqli_connect($servername, $username, $password, $database);
// mysqli_query($conn, "SET NAMES 'utf8'");
if (!$conn){
    die("Connection failed: " . mysqli_connect_error());

}else{
    echo "Connected successfully";
    
    $sql = "INSERT INTO users (username, password, name, email)
    VALUES ('lananh','123456','LanAnh', 'lananh@gmail.com' )";
    
        
        if ($conn->query($sql) === TRUE) {
            echo "Table users created successfully";
          } else {
            echo "Error creating table: " . $conn->error;
          }
}

$conn->close();
?>



?>
