let first = document.getElementsByClassName("heading")[0];
//getting the firstHeading as first variable.
console.log(first.classList);
//printing all the classList in the console.
first.classList.remove("red");
//removing red class from the first Heading.
first.classList.add("red");
//this method adds red class in the first heading.
first.classList.toggle("red");
//this method will add the class if it's not present otherwise it will remove the class from the element.
first.classList.contains("red");
//this method returns true if it contains the given class otherwise it will return false;
first.className = "red text-black ";
//adding red and text-black class in first heading.