

// // import { useState } from "react";

// // export default function List(){

// // const [prices,setPrices] =useState([2000,4000,6000]);

// // const sale = ()=>{
// //     setPrices([prices[0]/2,prices[1]/2,prices[2]/2]);

// // }

// // // const sale2 = prices.map( (index)=>{
// // //     //  setPrices(prices[]) = 
// // //     console.log(index);
// // // })
// // // const sale3 = ()=>{
// // //     sale2();
// // // }




// //     return(
// //         <>
// //         <h1>day la List gia ban rau cu</h1>
// //         <h3>Ca chua {prices[0]}</h3>
// //         <h3>Dua leo {prices[1]}</h3>
// //         <h3>Ca rot {prices[2]}</h3>
// //         <button onClick={()=>{sale()}}>Sale</button> 
// //         <button onClick={()=>{sale3()}}>Sale3</button> 

        
// //         </>
// //     )
// // }

// import { useState } from "react"
// export default function List (){
//     const [price, setPrice] = useState([2000,4000,6000]);
    
//     const sale = price.map((tien)=>{
//         return tien/2
//     })
//         //sale = gia tri return
//         const giadagiam = ()=>{
//             setPrice(sale)

//         }

//     return(
//         <>
//         <h1>Day la List rau cu</h1>
//         <h3>Ca rot: {price[0]}</h3>
//         <h3>dua leo: {price[1]}</h3>
//         <h3>Ca chua: {price[2]}</h3>
//         <button onClick={ ()=>{giadagiam()}}>Sale</button>
//         </>
//     )
// }


import {useState, useEffect} from "react"
export default function List (){
    const [price, setPrice] = useState(['','','','','']);
    useEffect ( ()=>{
        const url ="http://localhost:1337/luanvan/xuly/api/v0.01/price.php"
        fetch(url, {
            method:"GET"
        })
       
        .then((gia)=>gia.json())
        .then((giaJson)=>{
            console.log(giaJson);
            setPrice(giaJson)
        })
        .catch((loi)=>{
            console.log(loi);
        })

    },[])
    const listItems = price.map( (e,index)=>{
        return <h3 key={index}>id: {price[index].id}&nbsp;&nbsp; ten: {price[index].ten}&nbsp;&nbsp;&nbsp; gia: {price[index].gia}</h3>
        
    })
    const giamGia = price.map((e)=>{
        return {id:e.id, ten:e.ten,gia:e.gia/2}
       
    });
    const xemLog =()=>{
        setPrice(giamGia) 
        console.log(giamGia)
    }
    // const giadagiam=()=>{
    //     setPrice(giamGia)
    // }
       

    return(
        <>
        <h1>Day la the List</h1>
        {listItems}
        {/* <h3>id:{price[0].id} ten:{price[0].ten} gia:{price[0].gia}</h3>
        <h3>id:{price[1].id} ten:{price[1].ten} gia:{price[1].gia}</h3> 
        <h3>id:{price[2].id} ten:{price[2].ten} gia:{price[2].gia}</h3>
        <h3>id:{price[3].id} ten:{price[3].ten} gia:{price[3].gia}</h3>
        <h3>id:{price[4].id} ten:{price[4].ten} gia:{price[4].gia}</h3> */}
       
        <button onClick={ ()=> {xemLog()}}>Dieu chinh giam gia</button>
        </>
    )
}