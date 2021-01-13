const tepghichu = 'tepghichu';
const fs = require('fs');
const PromptSync = require('prompt-sync');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


console.log('Bạn vừa chọn xem các ghi chú !')
fs.readdirSync(tepghichu).forEach(file => {
    console.log(file);
});

        let tieude = prompt('Nhập tiêu đề của ghi chú bạn muốn xem : ');
        const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
        console.log(data);

        // CODE RUN TRONG MAIN OK ! 