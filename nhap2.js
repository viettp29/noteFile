const tepghichu = 'tepghichu';
var fs = require('fs');
const { isString } = require('util');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


{
let tieude = prompt('Nhập đúng tiêu đề bạn muốn sửa. Nếu nhập sai sẽ tạo ghi chú với tiêu đề vừa nhập : ')
        console.log('Bạn đã chọn cập nhập ghi chú ');
        console.log('1 . Cập nhập mới toàn bộ nội dung của ghi chú !');
        console.log('2 . Thêm nối tiếp nội dung vào ghi chú !');

        //Xử lý người dùng nhập không đúng
        function chon1()
        {
        let luaChon = prompt('Nhập lựa chọn của bạn : ');
        let luachon = Number(luaChon);
        try {
            if(luachon !== 1 && luachon !== 2) throw 'Lựa chọn nhập vào phải là 1 hoặc 2 ';
        }
        catch(err) {
            console.log(err);
            return chon1();
        }
        if(luachon === 1) {
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.writeFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
            return note();
        }
        else if(luachon === 2) {
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.appendFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        return note();
        }


        let luaChon = prompt('Nhập lựa chọn của bạn : ');
        let luachon = Number(luaChon);
        try {
            if(luachon !==1  && luachon !== 2) throw 'Lựa chọn nhập vào phải là 1 hoặc 2 ';
        }
        catch(err) {
            console.log(err);
            return chon1();
        }
        if(luachon === 1) {
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.writeFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        else if(luachon === 2) {
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.appendFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        return note();
    }