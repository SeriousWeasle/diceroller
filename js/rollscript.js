var rollinfo = [];

function extractInfo(form) {
    rollinfo = [form.dice.value, form.rolltype.value, form.blessbuff.checked, form.modifier.value];
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

    if (typeof (blessresult) != "number") {
        blessresult = 0;
    }

    if (rollinfo[2] == false) {
        blessresult = 0;
    }

    modifier = Number(rollinfo[3]);

    rolloutput = rollresult + blessresult + modifier;

    rollresults = [rollresult, rollresult1, rollresult2, blessresult, modifier, rolloutput];

    document.getElementById("output").innerHTML = rolloutput;

    console.log(rollresults);
}