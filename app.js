let color = "red";

switch(color){
    case "red":
        console.log("Stop!");
        break;

    case "yellow":
        console.log("Attention!");
        break;

    case "green":
        console.log("Go!");
        break;
    default:
        console.log("This color is not allowed!");
}

const day = new Date();

let weekday = String(day.getDay());

switch(weekday){
    case "1":
        console.log("Esmaspäev");
        break;

    case "2":
        console.log("Teisipäev");
        break;

    case "3":
        console.log("Kolmapäev");
        break;

    case "4":
        console.log("Neljapäev");
        break;

    case "5":
        console.log("Reede");
        break;

    case "6":
        console.log("Laupäev");
        break;

    case "7":
        console.log("Pühapäev");
        break;

    default:
        console.log("See pole nädalapäev");
        break;
}
console.log(day.getDay());