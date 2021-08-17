<?php
$taikhoan = $_GET["username"];
$matkhau = $_GET["password"];

// echo ("Ten tai khoan:".$taikhoan);
// echo ("<br>");
// echo ("Mat khau:".$matkhau);

 //Connect MySQL
 $servername = "localhost";
 $username = "root";
 $password = "";
 $database = "test";
 
 $conn = mysqli_connect($servername, $username, $password, $database);
 mysqli_query($conn, "SET NAMES 'utf8'");
 if (!$conn){
     die("Connection failed: " . mysqli_connect_error());
 
 }else{
      // Connect MySQL thành công

      $sql= "select *from users where username='$taikhoan' and password='$matkhau'";

      //Thuc thi truy van

      $result = $conn->query($sql);
      if($result->num_rows > 0){
          echo json_encode("Login success");
      }else{
          echo json_encode("Login Failed : " );
      }


       $conn ->close();

 }


?>