const tepghichu = 'tepghichu';
var fs = require('fs');
const { isString } = require('util');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


    console.log('so 1 ');
    console.log('so 2 ');


    function chon() {
        let Select = prompt('nhap lua chọn : ')
    let select = Select.toString();
        try {
            if (select !== "1" && select !== "2")
            throw 'sai rồi !';
        } catch (err) {
            console.log(err);
            return chon();
        }
        if(select === '1') {
            console.log('đúng rồi !');
        }
        else if(select === '2') {
            console.log('đúng rồi !');
        }
    }


    let select = prompt('nhap lua chọn : ')
    try {
        if (select !== '1'  && select !== '2')
        throw 'sai rồi !';
    } catch (err) {
        console.log(err);
        return chon();
    }
    
    if(select === '1') {
        console.log('đúng rồi !');
    }
    else if(select === '2') {
        console.log('đúng rồi !');
    }
    
