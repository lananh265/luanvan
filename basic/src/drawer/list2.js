import { useState } from "react"
export default function List (){
    const [price, setprice] = useState([2000,4000,6000])

    return(
        <>
        <h1>Day la List rau cu</h1>
        <h3>Ca rot: {price[0]}</h3>
        <h3>dua leo: {price[1]}</h3>
        <h3>Ca chua: {price[2]}</h3>
        </>
    )
}