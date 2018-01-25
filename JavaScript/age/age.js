var age = prompt("Wie alt sind Sie?");

if (age < 0){
    alert("Error: Alter musst nicht negativ sein")
}

else if (age < 18){
    alert("Entschuldigung, aber Sie dürfen nicht reinkommen")
}

else if (age < 21){
    alert("Komm! Aber Sie dürfen nicht trinken")
}

if (age === 21){
    alert("Alles gut zum Geburtstag!")
}

if ((age % 2) !== 0){
    alert("Ihre Alter ist ungerade!")
}

var a;

for (a = 0; a < age; a++){
    if (a*a == age){
        alert("Volkommene Viereck!")
    }
}
