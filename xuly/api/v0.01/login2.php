<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        // echo json_encode("da nhan POST");

        $json = file_get_contents('php://input'); // chứa gói tin json bị mã hóa
        $obj = json_decode($json,true); // {name: lananh} giải mã gói tin json

        if( isset( $obj["username"]) && isset( $obj["password"])){
            // echo json_encode("ton tai");

            $taikhoan = $obj["username"];
            $matkhau = $obj["password"];
            // $ten = $obj["name"];
            // $email = $obj["email"];

             //Connect MySQL
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "test";
        
        $conn = mysqli_connect($servername, $username, $password, $database);
        // mysqli_query($conn, "SET NAMES 'utf8'");
        if (!$conn){
            die("Connection failed: " . mysqli_connect_error());
        
        }else{
            // Connect MySQL thành công

            //Di tim Salt tuong ung voi User
            $findSalt = "SELECT salt FROM users2 where username = '$taikhoan'";
            $resultSalt = mysqli_query($conn, $findSalt);
            $row = mysqli_fetch_row($resultSalt);
            $salt = $row[0]; //gia tri salt:
            $hash = md5($matkhau.$salt);
            
            $sql = "SELECT *FROM users2 WHERE username='$taikhoan' and password ='$hash'";
           
           
           
           
            // echo ($salt);


             //Thuc thi truy van

             $result = $conn->query($sql);
            // echo gettype($result);

            $success = '{"status":1}';
            $failed = '{"status":0}';


             if($result->num_rows > 0){
                 echo ($success);
             }else{
                 echo ($failed );
             }


            // $sql= "select *from users2 where username='$taikhoan' and password='$matkhau'";

            //  //Thuc thi truy van

            //  $result = $conn->query($sql);
            //  if($result->num_rows > 0){
            //      echo json_encode("Login success");
            //  }else{
            //      echo json_encode("Login Failed : " );
            //  }

            

            //  if ($conn->query($sql) === TRUE) {
            //     echo json_encode("Login Success");
            //   } else {
            //     echo json_encode ("Login Failed: " . $conn->error);
            //   }

              $conn ->close();
        }

        


        }else{
            $success = '{"status":1}';
            echo json_encode("khong ton tai key nay trong object");
        }

    }else{
        echo json_encode("khong phai phuong thuc POST");
    }
?>