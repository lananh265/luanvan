const cuocGoi1 = (func)=>{
    console.log('cuoc goi1');
    func();
}
const cuocGoi2 = (func)=>{
    console.log('cuoc goi2');
    func();
}
const cuocGoi3 = ()=>{
    console.log('cuoc goi3');
}



cuocGoi1( ()=>(cuocGoi2(cuocGoi3)) );
