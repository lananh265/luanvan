<?php




// $a = 0;
// $b = '0';
// $c = NULL;
// $d = '';
// $e = FALSE;

// // if(isset($a)){
// //     echo ("Bien ton tai");
// //     //kiem tra a co ton tai
// // }else{
// //     echo ("Bien khong ton tai");
// // }

// if( empty($a) ){
//     echo ("Rong");
//     //kiem tra a co ton tai
// }else{
//     echo ("Khong rong");
// }



header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        // echo json_encode("da nhan POST");

        $json = file_get_contents('php://input'); // chứa gói tin json bị mã hóa
        $obj = json_decode($json,true); // {name: lananh} giải mã gói tin json

        if( isset( $obj["username"]) && isset( $obj["password"]) && isset( $obj["name"]) && isset( $obj["email"])){
            // echo json_encode("ton tai");

            $taikhoan = $obj["username"];
            $matkhau = $obj["password"];
            $ten = $obj["name"];
            $email = $obj["email"];

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

            $sql= "INSERT INTO users (username, password, name, email)
            VALUES ('$taikhoan','$matkhau','$ten', '$email' )";

             //Thuc thi truy van
             if ($conn->query($sql) === TRUE) {
                echo json_encode("Thanh Cong");
              } else {
                echo json_encode ("Error creating user: " . $conn->error);
              }

              $conn ->close();
        }

        


        }else{
            echo json_encode("khong ton tai key nay trong object");
        }

    }else{
        echo json_encode("khong phai phuong thuc POST");
    }
?>