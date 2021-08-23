

// import { useState } from "react";

// export default function List(){

// const [prices,setPrices] =useState([2000,4000,6000]);

// const sale = ()=>{
//     setPrices([prices[0]/2,prices[1]/2,prices[2]/2]);

// }

// // const sale2 = prices.map( (index)=>{
// //     //  setPrices(prices[]) = 
// //     console.log(index);
// // })
// // const sale3 = ()=>{
// //     sale2();
// // }




//     return(
//         <>
//         <h1>day la List gia ban rau cu</h1>
//         <h3>Ca chua {prices[0]}</h3>
//         <h3>Dua leo {prices[1]}</h3>
//         <h3>Ca rot {prices[2]}</h3>
//         <button onClick={()=>{sale()}}>Sale</button> 
//         <button onClick={()=>{sale3()}}>Sale3</button> 

        
//         </>
//     )
// }

import { useState } from "react"
export default function List (){
    const [price, setPrice] = useState([2000,4000,6000]);
    
    const sale = price.map((tien)=>{
        return tien/2
    })
        //sale = gia tri return
        const giadagiam = ()=>{
            setPrice(sale)

        }

    return(
        <>
        <h1>Day la List rau cu</h1>
        <h3>Ca rot: {price[0]}</h3>
        <h3>dua leo: {price[1]}</h3>
        <h3>Ca chua: {price[2]}</h3>
        <button onClick={ ()=>{giadagiam()}}>Sale</button>
        </>
    )
}