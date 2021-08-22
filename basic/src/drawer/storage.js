
import { useState, useEffect } from "react";
export default function Storage(){
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const [save, setSave] = useState(false);

    const getUsername = (nhap) =>{
        setUsername(nhap.target.value)
    }
    const getpassword = (nhap) =>{
        setpassword(nhap.target.value)
    }

    const saveUsername =(value) =>{
        if(localStorage){
            alert("Ton tai") ;
            localStorage.setItem("user",value ?  username: '');
            localStorage.setItem("luu",value);

        }else{
            alert("Trinh duyet cua ban khong ho tro")
        }
    }

    useEffect  ( ()=>{
        const save = localStorage.getItem("luu") ==='true';
        console.log(save);
        const user = save ? localStorage.getItem ('user'):'';
        setUsername(user);
        console.log(user);
    },[])

    return(
        <>
        <h1>Day la trang Storage</h1>

        <form>
            <label>
                Username: </label>
            <input type="text" value={username}  onChange={getUsername}/>
           <br/>
            
               <label> Password: </label>
            <input type="password" value={password}  onChange={getpassword}/>
            <br/>
           
            {/* <input type ="submit" value="Submit"/> */}
        </form>
        <button onClick={ ()=>{saveUsername(true)}}>Luu tai khoan</button>
        <button onClick={ ()=>{saveUsername(false)}}>Xoa tai khoan</button>

</>

    
    )
}