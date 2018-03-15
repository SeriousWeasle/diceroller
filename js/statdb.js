var creatureList = ["Orc", "Goblin", "Kobold", "Bugbear", "Ogre"];

var Goblin = [8, 14, 10, 10, 8, 8];
//This mess creates the options in the <head> of the html. Don't ask how it works, it just does. 
//P.S. don't touch
function createCreatureList() {
    creatureOutput = [];
    console.log(creatureList.length);
    for (i = 0; i < creatureList.length; i++) {
        creatureOutput[i] = "<option value='" + creatureList[i] + "'></option>";
    }
    console.log(creatureOutput);
    document.getElementById("creatures").innerHTML = creatureOutput;
}

function findStats(searchname) {
    if (searchname == "Goblin") {
        return Goblin;
    }
}