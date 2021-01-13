const tepghichu = 'tepghichu';
var fs = require('fs')
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});



function note() {
    do
{
    console.log('1 . Tạo ghi chú mới ')
    console.log('2 . Xem các ghi chú ')
    console.log('3 . Xóa một ghi chú ')
    console.log('4 . Sửa ghi chú ')
    console.log('5 . Thoát ')
    let Select = prompt('Mời bạn nhập lựa chọn : ');
    var select = Number(Select);
}
while (select < 1 || select > 5)
    

if (select === 1)
    {
        console.log('Bạn vừa chọn tạo mới một ghi chú !')
        let tieuDe = prompt('Tiêu Đề : ');
        let tieude = tieuDe.toString();
        
        let noiDung = prompt('Nội Dung : ');
        let noidung = noiDung.toString();
        fs.appendFileSync(`tepghichu/${tieude}.txt`, noidung);

        const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());   
        return note();
    }


    else if(select === 2)
    {
        console.log('Bạn vừa chọn xem các ghi chú !')
        fs.readdirSync(tepghichu).forEach(file => {
        console.log(file);
});

        let tieude = prompt('Nhập tiêu đề của ghi chú bạn muốn xem : ');
        const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
        console.log(data);      
        
        return note();

        }
    else if(select === 3)
    {
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
        return note();
    }
    else if(select === 4)
    {
        let tieude = prompt('Nhập đúng tiêu đề bạn muốn sửa. Nếu nhập sai sẽ tạo ghi chú với tiêu đề vừa nhập : ')
        console.log('Bạn đã chọn cập nhập ghi chú ');
        console.log('1 . Cập nhập mới toàn bộ nội dung của ghi chú !');
        console.log('2 . Thêm nối tiếp nội dung vào ghi chú !');
        let luachon = prompt('Nhập lựa chọn của bạn : ');
        let luaChon = Number(luachon);
        if(luaChon === 1) {
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.writeFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        else if(luaChon === 2){
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.appendFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        return note();
    }
    else if(select === 5)
    {
        process.on('exit', function(code) {  
            return console.log(`App exit with code ${code}`);
        });
    }
}



do
{
    console.log('1 . Tạo ghi chú mới ')
    console.log('2 . Xem các ghi chú ')
    console.log('3 . Xóa một ghi chú ')
    console.log('4 . Sửa ghi chú ')
    console.log('5 . Thoát ')
    let Select = prompt('Mời bạn nhập lựa chọn : ');
    var select = Number(Select);
}
while (select < 1 || select > 5)
    

if (select === 1)
    {
        console.log('Bạn vừa chọn tạo mới một ghi chú !')
        let tieuDe = prompt('Tiêu Đề : ');
        let tieude = tieuDe.toString();
        
        let noiDung = prompt('Nội Dung : ');
        let noidung = noiDung.toString();
        fs.appendFileSync(`tepghichu/${tieude}.txt`, noidung);

        const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());   
        return note();
    }


    else if(select === 2)
    {
        console.log('Bạn vừa chọn xem các ghi chú !')
        fs.readdirSync(tepghichu).forEach(file => {
        console.log(file);
});

        let tieude = prompt('Nhập tiêu đề của ghi chú bạn muốn xem : ');
        const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
        console.log(data);      
        
        return note();

        }
    else if(select === 3)
    {
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
        return note();
    }
    else if(select === 4)
    {
        let tieude = prompt('Nhập đúng tiêu đề bạn muốn sửa. Nếu nhập sai sẽ tạo ghi chú với tiêu đề vừa nhập : ')
        console.log('Bạn đã chọn cập nhập ghi chú ');
        console.log('1 . Cập nhập mới toàn bộ nội dung của ghi chú !');
        console.log('2 . Thêm nối tiếp nội dung vào ghi chú !');
        let luachon = prompt('Nhập lựa chọn của bạn : ');
        let luaChon = Number(luachon);
        if(luaChon === 1) {
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.writeFileSync(`tepghichu/${tieude}.txt`,noiDung);

            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        else if(luaChon === 2){
            let noidung = prompt('Nhập nội dung cho tiêu đề được sửa : ')
            let noiDung = noidung.toString()+'\n';
            fs.appendFileSync(`tepghichu/${tieude}.txt`,noiDung);
            
            const data = fs.readFileSync(`tepghichu/${tieude}.txt`);
        console.log(data.toString());
            console.log('Sửa thành công !');
        }
        return note();
    }
    else if(select === 5)
    {
        process.on('exit', function(code) {  
            return console.log(`App exit with code ${code}`);
        });
    }


