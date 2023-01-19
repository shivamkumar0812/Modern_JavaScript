// -------------Uncomment all the console.log to see the result.---------------------
let num = [23, 225, 26, 92, 72, 59];

let marks = [45, 26, 92, 68, 27, 60];

//---------------------Length Method------------------
//Array Methods
//console.log(num.length);
//it will return the length of an array.

//--------------------toString Method------------------
//console.log(num.toString());
//It will change an array to String.

//-------------------Join Method-------------------
let num1 = num.join("_");
//console.log(num1);
//console.log(typeof(num1));
//it will join all the elements of an array with the underscore.

//----------------Pop, Push, Shift, and Unshift Method-------------------
let p = num.pop();
//console.log(num, p);
//pop method removes the last element of an array and it returns the popped element.

let pu = num.push(34);
//console.log(num, pu);
//push method adds the element at last index and it returns the length of new array.

let sh = num.shift();
//console.log(num, sh);
//shift method removes first element of an array and it returns the shifted element.

let unsh = num.unshift(23);
//console.log(num, unsh);
//unshift method adds the element at first index and it returns the length of new array.

//----------------Some more methods of array--------------

//--------------------Deletion in Array----------------
let n = [23, 25, 26, 29, 32, 35, 50];
//console.log(n.length);
//output- 7
delete n[0];
//console.log(n.length);
//output- 7
//Length will be same after deleting because delete removes only  the data, not the memory space.

//-------------------Concating-------------------
let newArray = n.concat(num, marks);
//console.log(newArray);
//we can concat one or more array in an array.


//-----------------------Array Sorting---------------------------
let sortedArray = newArray.sort();
//console.log(sortedArray);
//we can see that 225 is at first because sort method only sorts alphabetically because it treats an array as a String.
//deleted element will be at last.

//----------------------Compare Function--------------------------
//compare function to sort an array numerically.
let compare = (a,b)=> {
  return a -b;
  //sort in ascending order
  //return b - a;
  //sort in descending order
}
//console.log(sortedArray.sort(compare));
//it returns the perfectly sorted array 

//console.log(sortedArray.reverse());
//it reverse the array.

let alphabet = ["Shivam","Ankush","Saurabh","Babloo","Ankit"];
//
console.log(alphabet.sort());
//But an which contains only String can be sorted perfectly.

//-------------------Splice and Slice Method-------------------------
let n1 = [23, 225, 26, 92, 72, 59];
let deletedValues = n1.splice(3, 2, 1023, 1025);
//console.log(n1);
//1st parameter - start index.
//2nd parameter - no. of elements to be removed
//from 3rd paramter onwards - elements that we want to add.
//splice methods returns an array of deleted values
//console.log(deletedValues);

let n2 = [0,1,2,3,4,5,6];
//console.log(n2.slice(2));
//it does not modify the original array
//it creates a new array. and it returns all the sliced elements.
//so the output will be of deleted elements.
// n2.slice(3,5);
// console.log(n2);


//----------------------Arrray map, reduce, and filter methods.---------------

//--------------Map Method---------------
let ekArray = [2,4,5,6,7];

let ek = ekArray.map((element, index, array) => {
  console.log(element, index, array);
  return element * 5;
})
console.log(ek);
//Map method returns a new array with the operation applied on it in return statement.

//forEach method also takes these three parameters, but it apply the logic on the same array.

//----------------Filter Method-------------------
let ekArray2 = [2,4,5,6,7,8,10,12];
let filteredArray = ekArray2.filter((elem) => {
  return elem<8;
})
console.log(filteredArray);
//Filter is used to apply filter on elements based on some conditions and return all those elements of the array which follow the conditon.

//--------------------Reduce Method-----------------
let ekArray3 = [45, 33, 20, 10, 25, 235];
let reducedArray = ekArray3.reduce((s1, s2)=> {
  return s1+ s2;
})
console.log(reducedArray);

//--------------OR-------------
let sum = (a1, a2)=> {
   return a1+ a2;
}
//let reducedArray = ekArray3.reduce(sum);
//----------About Reduce---------
//It reduced an array to a single value. It takes a function as an argument.

