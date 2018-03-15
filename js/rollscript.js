var rollinfo = [];
var advrolldiceamount = [];
var advrollblessactive = [];
var advrollinspiration = [];
var advrollmisc = [];

function extractInfo(form) {
    rollinfo = [form.dice.value, form.rolltype.value, form.blessbuff.checked, form.inspirationbuff.checked, form.modifier.value];
    console.log(rollinfo);
    rolldice();
    calculateroll();
}

function extractAdvInfo(form) {
    advrolldiceamount = [form.d4amount.value, form.d6amount.value, form.d8amount.value, form.d10amount.value, form.d12amount.value, form.d20amount.value, form.d100amount.value];
    advrollblessactive = [form.blessd4.checked, form.blessd6.checked, form.blessd8.checked, form.blessd10.checked, form.blessd12.checked, form.blessd20.checked, form.blessd100.checked];
    advrollinspiration = [form.inspired4.checked, form. inspired6.checked, form.inspired8.checked, form.inspired10.checked, form.inspired12.checked, form.inspired20.checked, form.inspired100.checked];
    advrollmisc = [form.modifier.value, form.outputtype.value, form.addinspiration.value, form.addbless.value];
    console.log(advrolldiceamount);
    console.log(advrollblessactive);
    console.log(advrollinspiration);
    console.log(advrollmisc);
    advrolldice();
}

function advroller(n, m) {
    advresults = [];
    for (i = 0; i < n; i++) {
        advresults[i] = roller(m);
    }
    console.log(advresults);
    return advresults;
}

function advrollbless() {
    if (advrollmisc[3] = "all") {
        if (advrollblessactive[0] = true) {
            return advroller(advrolldiceamount[0], 4);
        }
    }
}

function advrolldice() {
    d4results = advroller(advrolldiceamount[0], 4);
    d6results = advroller(advrolldiceamount[1], 6);
    d8results = advroller(advrolldiceamount[2], 8);
    d10results = advroller(advrolldiceamount[3], 10);
    d12results = advroller(advrolldiceamount[4], 12);
    d20results = advroller(advrolldiceamount[5], 20);
    d100results = advroller(advrolldiceamount[6], 100);
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

    modifier = Number(rollinfo[3]);

    rolloutput = rollresult + blessresult + inspirationresult + modifier;

    rollresults = [rollresult, rollresult1, rollresult2, blessresult, inspirationresult, modifier, rolloutput];

    document.getElementById("output").innerHTML = rolloutput;

    console.log(rollresults);
}