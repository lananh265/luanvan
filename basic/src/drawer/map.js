
// // const a =5
// // const b = 10

// // var es5 = function(a,b){
// //     return a*b;
// // }

// // const es6 = (a,b)=>{
// //     return a*b;
// // }
// // // console.log( es5(a,b))
// //  console.log( es6(1,2))

// //const es6 = (a,b)=> a*b
// // const es6 = (a,b)=> {
// //    return a*b
// // }

// // console.log(es6(5,10))

// // const array = [1,2,3]
// // // const map = array.map(x =>x*2)
// // const map = array.map ((x)=> {
// //     return x*2
// // })
// // console.log(map)    


// const array = [2000,4000,6000]
// const array2 = [4000,6000,8000]

// //giảm giá trị array 1/2

// const giam = array.map((x)=>{
//    return x/2

// })

// const nhan = (mang) =>{
//     // console.log(mang.map ((x=>{
//     //     return x/2
//     // })))
//     return mang.map((x)=>{
//         return x/2
     
//      })
// }
// console.log(nhan(array2))

// // const nhan2 = (a,b) =>{
// //     console.log(a*b)
// // }

//  nhan(array2)


const giatien = [{ten: "cam", giatien: 2000}, {ten: "man", giatien: 4000}]
const obj1 = giatien[0]
// console.log(obj1.giatien)

const duyet = giatien.map((element) =>{
       return {ten: element.ten, giatien: element.giatien/2
           }

    
    })//element = giatien[0] element = giatien[1]
//duyet [duyet tung phan tu]=>[1000,2000]
console.log(duyet)

// const person =()=>{
//     return {
//         age:50,
//         eyeColor: "blue"
//     }
       
// }




