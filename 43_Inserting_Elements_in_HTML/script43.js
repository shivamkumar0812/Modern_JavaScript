let div = document.getElementsByTagName('div')[0];
// div.innerHTML = div.innerHTML + `<h1>Hello World!</h1>`;

let first = document.createElement("div");
first.innerHTML = `<h1>Hello, this is a new div</h1>`;
// div.appendChild(first);
//append child will add the HTML after actual end of the element.
// div.prepend(first);
//append child will add the HTML before actual start of the element.

// div.before(first);
//this works same as prepend.

// div.after(first);
//this works same as append.

div.replaceWith(first);
//this method replaces whole element with the given element.
