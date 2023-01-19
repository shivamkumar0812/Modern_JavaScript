let firstHeading = document.getElementById("firstHeading");
let secondHeading = document.getElementById("secondHeading");
let container = document.getElementById("container");
let a = firstHeading.getAttribute("class");
console.log(a);
//getAttribute returns the value of the attribute given to it.

console.log(firstHeading.hasAttribute("class"));
//output- true
console.log(firstHeading.hasAttribute("style"));
//output -false

//hasAttribute is used to know if an element has attribute with the given name or not.

firstHeading.setAttribute("hidden","true");
//setAttribute method is used to set an attribute in an element.

firstHeading.removeAttribute("id");
//This method is used to remove the Attribute of an element.

console.log(secondHeading.attributes);
//this method is used to get all the attributes of an element.

console.log(container.dataset);
console.log(container.dataset.logo);
console.log(container.dataset.editor);