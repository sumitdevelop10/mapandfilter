






//map method
let arr = [45, 23, 21]
// console.log(arr)
let a = arr.map((value, index, array )=>{
    console.log(value, index, array)
    return value + index
})
console.log(a)


//filter method

let arr2 = [45,23,210, 3, 5]
let a2 = arr2.filter((a)=>{
    return a < 10})

console.log(a2)

 //reduce method

 let arr3 = [1,2 ,4,5,6,]
 const reduce_func = (h1,h2) =>{
 
     return h1 + h2
 }
 
 let newarr3 = arr3.reduce(reduce_func)
 console.log(newarr3)







