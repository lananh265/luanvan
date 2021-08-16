<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        // echo json_encode("Tiep nhan Post");

        $json = file_get_contents('php://input');
        $obj = json_decode($json,true); // {name: lananh}

        //lay gia tri trong Object
        $taikhoan = $obj['username'];
        $matkhau = $obj['password'];
        $name = $obj['name'];
        $email= $obj['email'];

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
            //Cau lenh truy van
            $sql = "INSERT INTO users (username, password, name, email)
                    VALUES ('$taikhoan','$matkhau','$ten', '$email' )";
            
            //Thuc thi truy van
            if ($conn->query($sql) === TRUE) {
                echo json_encode("Thanh Cong");
              } else {
                echo json_encode ("Error creating user: " . $conn->error);
              }

        }



        // echo json_encode($email);

    }else {
        echo json_encode("Day khong phai yeu cau Post");
    }
  
   

?>  