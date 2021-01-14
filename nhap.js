const tepghichu = 'tepghichu';
var fs = require('fs');
const { isString } = require('util');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


function chon() {
    let select = prompt('nhap lua chọn : ')
    let Select = toString(select);
    try {
        if (Select != 1 || Select != 2 || Select != 3 || Select != 4 || Select != 5)
        throw 'sai roi';
    } catch (err) {
        console.log(err);
        return chon();
    }
}

let select = prompt('nhap lua chọn : ')
    let Select = toString(select);
    try {
        if (Select != '1' || Select != '2' || Select != '3' || Select != '4' || Select != '5')
        throw 'sai roi';
    } catch (err) {
        console.log(err);
        return chon();
    }
    if(Select == '1') {
        console.log('dung rồi');
    }
    else if(Select == '2') {
        console.log('đúng rồi ');
    }
