var advrolldiceamount = [];
var advrollblessactive = [];
var advrollinspiration = [];
var advrollmisc = [];

function extractAdvInfo(form) {
    advrolldiceamount = [form.d4amount.value, form.d6amount.value, form.d8amount.value, form.d10amount.value, form.d12amount.value, form.d20amount.value, form.d100amount.value];
    advrollblessactive = [form.blessd4.checked, form.blessd6.checked, form.blessd8.checked, form.blessd10.checked, form.blessd12.checked, form.blessd20.checked, form.blessd100.checked];
    advrollinspiration = [form.inspired4.checked, form.inspired6.checked, form.inspired8.checked, form.inspired10.checked, form.inspired12.checked, form.inspired20.checked, form.inspired100.checked];
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
        advresults[i] = Math.ceil(Math.random() * m);
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