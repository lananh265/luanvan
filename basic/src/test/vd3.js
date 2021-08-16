const cuocGoi1 = (func)=>{
    console.log('cuoc goi 1');
    setTimeout(()=>{
    func();
    },000);
}

const cuocGoi2 = ()=>{
    console.log('cuoc goi 2');
    
   
}
const cuocGoi3 = ()=>{
    console.log('cuoc goi 3');
   
}




cuocGoi1(cuocGoi2);
cuocGoi3();

