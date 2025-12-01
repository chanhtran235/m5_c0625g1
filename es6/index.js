
import sum,{showMessage as showMess} from "./myjs.js";
console.log("start");
showMess("hello");

function calculator(callBack, array){
    return callBack(array);
}
// Array.prototype.calculator = function (callBack){
//     return callBack(this);
// }
//
let mang = [1,2,3,4,5,6];

let element = mang.reduce((avg,e,i,array)=>avg+e/array.length,0);
console.log(element)
// let ketQua =mang.calculator(tong);
// console.log(ketQua)
// let result = calculator(function (arr){
//     for (let i = 0; i <arr.length ; i++) {
//         if (arr[i]%2==0){
//             return arr[i];
//         }
//     }
// },[1,28,3,4,5,6]);
//
// console.log(result);

function tong(array){
    let sum =0;
    for (let i = 0; i <array.length ; i++) {
        sum += array[i];
    }
    return sum;
}

function avg(array){
    let sum =0;
    for (let i = 0; i <array.length ; i++) {
        sum += array[i];
    }
    return sum/array.length;
}


