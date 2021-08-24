
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// forEach(numbers, function(element){
//     sum += element;
// });
// console.log(sum);

// function printContentArray(array){
//     array.forEach(function print(element){
//       console.log(element);
//     });
//   }
  
//   printContentArray([1, 3, 5]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// function forEach(array, action){
//     for(let i = 0; i < array.length; i++)
//       action(array[i]);
//   }

//forEach dung de lap qua cac phan tu cua mang. 
//sẽ lần lượt truyền các phần tử của mảng vào một hàm được cung câp trước đó, hàm này sẽ tiến hành xử lý các thành phần tử cửa mảng

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
forEach(numbers, function(element){
    sum += element;
});
console.log(sum);