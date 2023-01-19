//------------console.log and console.dir-----------------
console.log(document.getElementsByTagName('span')[0]);
//It will give the element only

console.dir(document.getElementsByTagName('span')[0]);
//It will give the element with all the properties of it.

console.log(document.body.firstChild.nodeName);
//it will give text 
console.log(document.body.firstElementChild.nodeName);
//it will give div.
let bold1 = document.getElementById('bold1');
console.log(bold1.innerHTML);
//innerHTML gives all the HTML inside of an element
// innerHTML is only valid for element tags, for other HTML we can use data and nodeValue;
console.log(bold1.outerHTML);
//innerHTML gives all the HTML from its starting tag to its ending tag.
 
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

//textContent is used to give only the text items, minus all tags.
console.log(document.body.textContent);


