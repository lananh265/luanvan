const loihua = new Promise ( (thanhcong, thatbai)=>{
    
    //xu li thanh phan logic
    //a thanhcong( param)
    //b thatbai()

    console.log('xu li loi hua');
});

loihua
.then((ok)=>{
    console.log(ok);

})
.catch((faild)=>{
    console.log(faild);

})
.finally(()=>{
console.log('Done');
})