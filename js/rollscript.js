var rollinfo = [];

function extractInfo(form) {
    rollinfo = [form.dice.value, form.rolltype.value, form.blessbuff.checked, form.inspirationbuff.checked, form.modifier.value];
    console.log(rollinfo);
    rolldice();
    calculateroll();
}

function roller(n) {
    return Math.ceil(Math.random() * n);
}

function rolldice() {
    rollresult1 = roller(rollinfo[0]);
    rollresult2 = roller(rollinfo[0]);

    if (rollinfo[2] == true) {
        blessresult = roller(4);
    }

    if (rollinfo[3] == true) {
        inspirationresult = roller(6);
    }
}

function calculateroll() {
    if (rollinfo[1] == "normal") {
        rollresult = rollresult1;
    }

    if (rollinfo[1] == "disadvantage") {
        if (rollresult1 <= rollresult2) {
            rollresult = rollresult1;
        }

        else {
            rollresult = rollresult2;
        }
    }

    if (rollinfo[1] == "advantage") {
        if (rollresult1 >= rollresult2) {
            rollresult = rollresult1;
        }

        else {
            rollresult = rollresult2;
        }
    }

    //Tide pods i guess. This comment was a result of a misunderstanding in a Discord call...

    if (typeof (blessresult) != "number") {
        blessresult = 0;
    }

    if (typeof (inspirationresult) != "number") {
        inspirationresult = 0;
    }

    if (rollinfo[2] == false) {
        blessresult = 0;
    }

    modifier = Number(rollinfo[4]);

    rolloutput = rollresult + blessresult + inspirationresult + modifier;

    rollresults = [rollresult, rollresult1, rollresult2, blessresult, inspirationresult, modifier, rolloutput];

    document.getElementById("output").innerHTML = rolloutput;

    console.log(rollresults);
}