<?php
Khởi tạo Database test:
   CREATE DATABASE `test` CHARACTER SET utf8 COLLATE utf8_general_ci;

Tạo table users:
CREATE TABLE users (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(30) NOT NULL,
            password VARCHAR(50) NOT NULL,

            salt VARCHAR(30),

            name VARCHAR(50) NOT NULL,
            email VARCHAR(50),
            register TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            unique (username)
            );


Ngăn chặn root auto login edit file: config.inc.php 
$cfg['Servers'][$i]['auth_type'] = 'cookie';
$cfg['Servers'][$i]['AllowRoot'] = FALSE;

Thay đổi password root 
   UPDATE mysql.user SET Password=PASSWORD('123456') WHERE User='root';
   FLUSH PRIVILEGES;

Liệt kê user có trong MySQL
select host , user from mysql.user;

Thiết lập quyền user trong MySQL 
https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql

Quy tắc bảo mật cơ bản 
https://drive.google.com/file/d/0B-hTIM3aG_oJWnpxdGtXV2Z2YlE/view?resourcekey=0-1m1M1q0tjXiGBlOBaMAhUw

Tạo user connect smart_home_app và có đủ tất cả quyền
  Tạo user và pass 
  CREATE USER 'ty'@'localhost' IDENTIFIED BY '123456';
  (Lúc này chưa truy cập đươc dữ liệu)
  Cấp quyền databse
  GRANT ALL PRIVILEGES ON smart_home_app.* TO 'ty'@'%'  WITH GRANT OPTION;

  Xem quyền hiện tại của user
  SHOW GRANTS FOR 'username'@'localhost';

  Xoá người dùng 
  DROP USER 'username'@'localhost';

Sau khi hoàn thành thiết đặt , dùng lệnh này để này để cập nhật đặt quyền 
  FLUSH PRIVILEGES;  
  ?>