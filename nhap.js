const tepghichu = 'tepghichu';
var fs = require('fs');
const { isString } = require('util');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


function chon() {
    let select = prompt('nhap lua chọn : ')
    let Select = Number(select);
    try {
        if (Select < 1)
        throw 'sai roi';
        if (Select > 2)
        throw 'sai rồi ';
        if (isString(Select) === true)
        throw 'sai rồi';
    } catch (err) {
        console.log(err);
    }
}

let select = prompt('nhap lua chọn : ')
    let Select = Number(select);
    try {
        if (Select < 1)
        throw 'sai roi';
        if (Select > 2)
        throw 'sai rồi ';
        if (isString(Select) === true)
        throw 'sai rồi';
    } catch (err) {
        console.log(err);
        return chon();
    }
    if(Select === 1) {
        console.log('dung rồi');
    }
    else if(Select === 2) {
        console.log('đúng rồi ');
    }
    
