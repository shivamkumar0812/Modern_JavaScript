let first = document.getElementById("first");
//Methods to insert adjacent HTML which takes two parameters
//1st - Position
//2nd - HTML.
first.insertAdjacentHTML('beforeBegin',`<h1 class="test">Before Begin</h1>`);
first.insertAdjacentHTML('beforeEnd',`<h1 class="test">Before End</h1>`);
first.insertAdjacentHTML('afterBegin',`<h1 class="test">After Begin</h1>`);
first.insertAdjacentHTML('afterEnd',`<h1 class="test">After End</h1>`);

//Method to remove any element.
// first.remove();