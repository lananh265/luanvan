// import React from "react";
// import {Link} from "react-router-dom";
// const Login = () => {
//   return (
//     <div>
//       <h3>Login</h3>
//       <Link to="/product" >Login</Link>
//     </div>
//   );
// };
// export default Login;


// import React from "react";
// import {Link} from "react-router-dom";
// const Login = () => {
//   return (
//     <div>
//       <h3>Login</h3>
//       <Link to="/welcome" >Go to Welcome</Link>
      
//     </div>
//   );
// };
// export default Login;


import {React,useState} from "react";
 import {Link} from "react-router-dom";

export default function Login(){
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const [status, setStatus] = useState(0);


  const login = () =>{
    //  alert (userName + "--" + password);

    console.log(userName + "--" + password);
    const data={
      "username":userName,
      "password":password
    }
    const url = "http://localhost:1337/luanvan/xuly/api/v0.01/login2.php";
    fetch(url,{
      method: "POST",
      // headers:{
      //   'Accept': 'application/json',
      //   'Content-type': 'application/json'
        
      // },
      body: JSON.stringify(data)
    })
    .then((dulieu)=>dulieu.json())
    .then((dulieuJson)=>{
      console.log(dulieuJson);

      setStatus(dulieuJson.status);

    })
    .catch((error)=>{
      console.log("Loi dang nhap: "+error);
    }, []);



  }
const getUserName = (data) =>{
  //data la du lieu cua Object

  setuserName(data.target.value);
}

const getpassword = (data) =>{
  //data la du lieu cua Object

  setpassword(data.target.value);
}

  return(
    <>
    <h1>Đây là trang Login</h1>

    <form onSubmit={login}>
        <label>
          Name:
          <input type="text" value={userName} onChange={getUserName} />
        </label>
        <br/>
        Password
        <input type="text" value={password} onChange={getpassword} />
        <br/>
        {/* <input type="submit" value="Đăng nhập" /> */}
      </form>
      
      <button onClick ={login}>Đăng nhập</button>


      
      <Link to={ status ? "/welcome" : {} } >Go to Login </Link>
    
    </>

  )
}