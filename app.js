let val;

const li = document.createElement("li");

li.className = "collection-item";

li.appendChild(document.createTextNode("Study JS element creation"));

const link = document.createElement("a");
link.className = "secondary-content";
link.appendChild(document.createTextNode("X"));
link.setAttribute("href", "#");
li.appendChild(link);

const ul = document.querySelector("ul");

ul.appendChild(li);

console.log(li);