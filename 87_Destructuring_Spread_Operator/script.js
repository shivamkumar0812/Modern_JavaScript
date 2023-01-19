//-----------Destructuring-----------
let arr = [1,5,6,63,36,12];
// No need to do this - 
// let a = arr[0];
// let b = arr[1];
//Instead we can do this using desturcturing
// let [a,b] = arr; //store 1 in a and 5 in b.
// let [a,b,c,d] = arr; //store 1 in a, 5 in b, 6 in c, and 63 in d.
// let [a,b,...rest] = arr; //store 1 in a, 5 in b, and then store rest of the values in rest as an array
// let [a, , ,...rest] = arr; //store 1 in a, leave 5 & 6, and then store rest of the values in rest as an array

//We can also perform destructuring in objects in the following way - 
// let {a,b} = {a:1,b:5};
// console.log(a,b);

({x,y,z} = employee1 = {
  name: "Raju",
  company: "25 din me paisa double",
  designation: "chor"
})
console.log(x,y,z);

//----------Spread Syntax----------------
//It can be used to make an object from an array.
// let arr1 = [2,5,6,8,12,15,16];
// let obj = {...arr};
// console.log(obj);

let arr1 = [1,5,8];

let sum = (a1,a2,a3) => {
  return a1+a2+a3;
}
console.log(sum(...arr1));
//outupt should be 1+5+8 = 14;


let employee2 = {
  name: "shivam",
  company: "XYZ",
  address: "Delhi"
}
console.log({...employee2, name: "raju", company: "ABC"}); //this will overwrite the name property of employee2
console.log({ name: "raju",...employee2}); //this will not overwrite the name property of employee2