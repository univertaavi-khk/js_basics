const id = 100;


// võrdub - ==
// võrdub + tüübikontroll - ===
// ei võrdu - !=
// ei võrdu + tüübikontroll - !==


/*if(id == 100){
    console.log("OK")
} else {
    console.log("NOT OK")
};
*/

let color = "greeen";

if(color==="red"){
    console.log("Stop!");
} else if(color==="yellow"){
    console.log("Attention!");
} else if(color==="green"){
    console.log("Go!");
} else {
    console.log("Invalid color!");
}

// and - &&
// or - ||

let name = "Kadi";
let age = 55;

if(age > 0 && age <= 12){
    console.log(`${name} on laps`);
} else if(age >= 13 && age < 18) {
    console.log(`${name} on nooruk`);
} else {
    console.log(`${name} on täiskasvanu`);
}

if(age < 18 || age > 65) {
    console.log(`${name} ei saa maratonile registreerida`);
} else {
    console.log(`${name} saab maratonile registreerida`);
}