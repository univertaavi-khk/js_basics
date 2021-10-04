// event elements

const list = document.querySelector("ul");

list.addEventListener("click", runEvent);

function runEvent(e) {
    console.log(`Event is ${e.type}`);
    console.log(e.target.value);
}