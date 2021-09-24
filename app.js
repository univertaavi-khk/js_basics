const firstName = "Kadi";
const surName = "Tamm";
const age = 20;
const text = "Tere, olen Kadi!";
const tags = "arendus,veeb";

let val;

// concatenation
val = firstName + " " + surName;

val = firstName;
val += surName;

val = text + " Minu töövaldkond on " + tags;

// escaping

val = "See on \"jutumärkides\"";

// case
val = firstName.toLowerCase() + " " + surName.toUpperCase();

val = surName.charAt(surName.length - 2);

console.log(val);

val = `
	<ul>
		<li>Eesnimi: ${firstName}</li>
		<li>Perenimi: ${surName}</li>
		<li>Vanus: ${age}</li>
		<li>Alad: ${tags}</li>
	</ul>
`;
document.body.innerHTML = val;