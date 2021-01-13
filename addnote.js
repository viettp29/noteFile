const tepghichu = 'tepghichu';
const fs = require('fs');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


console.log('Bạn vừa chọn tạo mới một ghi chú !')
        let tieuDe = prompt('Tiêu Đề : ');
        let tieude = tieuDe.toString();
        
        let noiDung = prompt('Nội Dung : ');
        let noidung = noiDung.toString();
        fs.appendFileSync(`tepghichu/${tieude}.txt`, noidung);

        const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
        
        
        //CODE ĐÃ TEST TRONG MAIN OK!