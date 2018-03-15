function searchCreature(form) {
    searchName = form.creature.value;
    console.log(searchName);
    if (creatureList.includes(searchName) === true) {
        console.log("Contains creature");
        creatureStats = findStats(searchName);
        console.log(creatureStats);
        displayStats(creatureStats);
    }

    else {
        console.log("Does not contain creature");
    }
}

function displayStats(c) {
    output = "<div id=statblock><h3>Strength: " + c[0] + "</h3><h3>Dexterity: " + c[1] + "</h3><h3>Constitution: " + c[2] + "</h3>"

    document.getElementById("statblock-container").innerHTML = output;
}