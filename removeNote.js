const tepghichu = 'tepghichu';
var fs = require('fs')
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


console.log('Bạn vừa chọn xóa ghi chú !')
        let tieuDe = prompt('Nhập phần tiêu đề của ghi chú bạn muốn xóa : ')
        let tieude = tieuDe.toString();
        fs.unlink(`tepghichu/${tieuDe}.txt`, (err) => {
        if (err) {
            console.error(err)
            return
            }
        
            //file removed
        })
        console.log('Xóa thành công !');

        //CODE NGON CHẠY TRONG MAIN OK!