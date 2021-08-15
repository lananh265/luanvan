// // import React from 'React';
// import {useState, useEffect} from 'react';


// export default function Fetch(){

//     const [json, setJson] = useState({});

//     useEffect(()=>{
//         console.log('run ham useEffect');

//         fetch()
//         .then()
//         .then()
//         .catch( (e)=> {
            
//         } );
        
//     },[]);

//     return(
// <>
// <h1>Day la Fetch API </h1>
// </>
//     );
// }



import { useState, useEffect } from 'react';

export default function Fetch(){
    const [json, setJson] = useState({});
    useEffect( ()=>{
        console.log('run ham useEffect');
        fetch()
        .then()
        .then()
        .catch( (e)=> {
            
        } );

    }, []);
    return(
        <>
            <h1>Đây là trang Fetch API</h1>
        </>
    )
}