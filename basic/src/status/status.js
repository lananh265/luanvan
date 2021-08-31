import {useState, useEffect} from 'react';


export default function Status(){
    const [status, setStatus] = useState([""]);
    const [newStatus, setNewStatus] = useState("");
    const [trangthai, setTrangThai] = useState("");



    const listStatus = status.map( (element,index) =>{
        return <h3 key={index}>{element.userId }{' '}{element.desc} </h3>
    })  

    const postStatus = ()=>{
        const url = "http://localhost:8081/status";
        const json = {
            userId: 1,
            desc: newStatus
        }
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(json)
        })
        .then( (data)=>data.json())
        .then( (dataJson)=>{
            setTrangThai(dataJson.desc);
            setStatus([dataJson,...status]); 
        })
        
        .catch( (loi)=>{
            console.log(loi)
        })
    }

    useEffect ( ()=>{
        console.log("run UseEffect")
        const url = "http://localhost:8080/login";
        fetch(url, {
            method: "GET"
        })
        .then( (data)=> data.json())
        .then( (dataJson)=>{
            console.log(dataJson);
            setStatus(dataJson);
        })
        .catch( (loi)=>{
            console.log(loi);
        })
    },[]);

    return(
        <div>
            <h1>Hãy chia sẻ trạng thái mới của bạn</h1>
            <form >
                <label>
                    <input type="text" onChange={ (e)=> setNewStatus(e.target.value)}></input>
                </label>
                
            </form>

            <button onClick={()=>{postStatus()}}> Đăng bài</button>
            {listStatus}
            
        </div>
    )
}