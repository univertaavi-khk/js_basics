const person = {
    firstName: "Kadi",
    lastName: "Tamm",
    age: 23,
    email: "kadi.tamm@gmail.com",
    hobbies: ["muusika", "sport"],
    address: {
        city: "Tallinn",
        country: "Harjumaa"
    },
    getBirthdayYear: function(){
        return 2021 - this.age;
    }
};

let val;

val = person.firstName;
val = person.address.city;
val = person.getBirthdayYear();

console.log(val);