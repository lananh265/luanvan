
import { useState } from "react";
export default function Login(){
    const [taikhoan, setTaikhoan] = useState("");
    const [matkhau, setMatKhau] = useState("");
    const lanAnh = (giatrinhap) =>{
        setTaikhoan(giatrinhap.target.value);

    }
    const pass = (giatrinhap) =>{
        setMatKhau(giatrinhap.target.value);

    }
    const kiemTra = ()=>{
        // alert(taikhoan);
    }

    return(
        <>
        <h3>Đây là trang web Login</h3>

        <form>
            <label>
                Username: </label>
            <input type="text" value={taikhoan}  onChange={lanAnh}/>
           <br/>
            
               <label> Password: </label>
            <input type="password" value={matkhau}  onChange={pass}/>
            <br/>
           
            {/* <input type ="submit" value="Submit"/> */}
        </form>
        <button onClick={kiemTra}>Đăng Nhập</button>

        </>
    );
}






