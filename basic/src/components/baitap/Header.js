
import s from './header.module.css'

export default function Header(){
    return(
     <div className={s.container}>
        <div className={s.header}>
            <div className={`${s.left} ${s.box}`}>
                <h1>LANA.VN</h1>
            </div>

            <div className={`${s.right} ${s.box}`}>

            <button className={s.button}>Đăng Kí</button>
            </div>
        </div> 
        <div>
           
        </div> 
    </div>  
    )
}