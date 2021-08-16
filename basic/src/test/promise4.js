// const loihua = new Promise ( (thanhcong, thatbai)=>{
    
//     //xu li thanh phan logic
//     //a thanhcong( param)
//     //b thatbai()

//     console.log('xu li loi hua');
// });


let loihua = (a,b) =>{
    return new Promise((thanhcong, thatbai) =>{
        //logic
        if(typeof a == 'number' && typeof b == 'number'){
            thanhcong(a+b);
        }else{
            thatbai('gia tri khong hop le');
        }

    })

    
}


loihua('1',2)
.then((ok)=>{
    console.log(ok);

})
.catch((faild)=>{
    console.log(faild);

})
.finally(()=>{
console.log('Done');
})