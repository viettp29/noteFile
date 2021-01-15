const tepghichu = 'tepghichu';
var fs = require('fs');
const { isString } = require('util');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});


function note() {

    console.log('1 . Tạo ghi chú mới ')
    console.log('2 . Xem các ghi chú ')
    console.log('3 . Xóa một ghi chú ')
    console.log('4 . Sửa ghi chú ')
    console.log('5 . Thoát ')
    /*
    Xử lý bắt hết tất cả các trường hợp mà user nhập vào:
    - Nhập vào String
    - Nhập vào Char
    */

    function chon() {
        let select = prompt('Mời bạn nhập lựa chọn : ');
    
    try {
        if (select !== '1' && select !== '2' && select !== '3' && select !== '4' && select !== '5')
        throw 'Lựa chọn phải là số từ 1-5 ';
    }
    catch(err) {
        console.log(err);
        return chon();
    }
    if (select === '1')
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

    else if(select === '2')
    {
        var arr = [
    
        ]
        console.log('Bạn vừa chọn xem các ghi chú !')
                fs.readdirSync(tepghichu).forEach(file => {
                arr.push(file);
        });
        let leng = arr.length;
        if(leng === 0){
            console.log('Bạn chưa có ghi chú ! Hãy tạo ghi chú mới :)) ');
            return note();
        }else{
            console.log(arr);
            let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data);
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            function chon2() {
                var arr = [
        
                ]
                console.log('Bạn vừa chọn xem các ghi chú !')
                        fs.readdirSync(tepghichu).forEach(file => {
                        arr.push(file);
                });
                
                console.log(arr);
                let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data); 
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            }
        }
    }
    else if(select === '3')
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


    else if(select === '4')
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
        
        
    else if(select === '5')
    {
        process.on('exit', function() {  
            return console.log(`Bạn đã thoát chương trình thành công ! `);
        });
    }
    }


    let select = prompt('Mời bạn nhập lựa chọn : ');
    try {
        if (select !== '1' && select !== '2' && select !== '3' && select !== '4' && select !== '5')
        throw 'Lựa chọn phải là số từ 1-5 ';
    }
    catch(err) {
        console.log(err);
        return chon();
    }

if (select === '1')
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


    else if(select === '2')
    {
        var arr = [

        ]
        console.log('Bạn vừa chọn xem các ghi chú !')
                            fs.readdirSync(tepghichu).forEach(file => {
                            arr.push(file);
                    });
                    let leng = arr.length;
        if(leng === 0){
            console.log('Bạn chưa có ghi chú ! Hãy tạo ghi chú mới :)) ');
            return note();
        }else{
            console.log(arr);
            let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data);
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            function chon2() {
                var arr = [
        
                ]
                console.log('Bạn vừa chọn xem các ghi chú !')
                        fs.readdirSync(tepghichu).forEach(file => {
                        arr.push(file);
                });
                
                console.log(arr);
                let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data); 
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            }
        }
    }


    else if(select === '3')
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


    else if(select === '4')
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
            else if(select === '5')
    {
        process.on('exit', function() {  
            return console.log(`Bạn đã thoát chương trình thành công ! `);
        });
    }
            
}






console.log('1 . Tạo ghi chú mới ')
    console.log('2 . Xem các ghi chú ')
    console.log('3 . Xóa một ghi chú ')
    console.log('4 . Sửa ghi chú ')
    console.log('5 . Thoát ')
    /*
    Xử lý bắt hết tất cả các trường hợp mà user nhập vào:
    - Nhập vào String
    - Nhập vào Char
    */

    function chon() {
        let select = prompt('Mời bạn nhập lựa chọn : ');
    
    try {
        if (select !== '1' && select !== '2' && select !== '3' && select !== '4' && select !== '5')
        throw 'Lựa chọn phải là số từ 1-5 ';
    }
    catch(err) {
        console.log(err);
        return chon();
    }
    if (select === '1')
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

    else if(select === '2')
    {
        var arr = [
    
        ]
        console.log('Bạn vừa chọn xem các ghi chú !')
                fs.readdirSync(tepghichu).forEach(file => {
                arr.push(file);
        });
        let leng = arr.length;
        if(leng === 0){
            console.log('Bạn chưa có ghi chú ! Hãy tạo ghi chú mới :)) ');
            return note();
        }else{
            console.log(arr);
            let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data);
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            function chon2() {
                var arr = [
        
                ]
                console.log('Bạn vừa chọn xem các ghi chú !')
                        fs.readdirSync(tepghichu).forEach(file => {
                        arr.push(file);
                });
                
                console.log(arr);
                let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data); 
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            }
        }
    }


    else if(select === '4')
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
        
        
    else if(select === '5')
    {
        process.on('exit', function() {  
            return console.log(`Bạn đã thoát chương trình thành công ! `);
        });
    }
    }


    let select = prompt('Mời bạn nhập lựa chọn : ');
    try {
        if (select !== '1' && select !== '2' && select !== '3' && select !== '4' && select !== '5')
        throw 'Lựa chọn phải là số từ 1-5 ';
    }
    catch(err) {
        console.log(err);
        return chon();
    }

if (select === '1')
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


    else if(select === '2')
    {
        var arr = [

        ]
        console.log('Bạn vừa chọn xem các ghi chú !')
                            fs.readdirSync(tepghichu).forEach(file => {
                            arr.push(file);
                    });
                    let leng = arr.length;
        if(leng === 0){
            console.log('Bạn chưa có ghi chú ! Hãy tạo ghi chú mới :)) ');
            return note();
        }else{
            console.log(arr);
            let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data);
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            function chon2() {
                var arr = [
        
                ]
                console.log('Bạn vừa chọn xem các ghi chú !')
                        fs.readdirSync(tepghichu).forEach(file => {
                        arr.push(file);
                });
                
                console.log(arr);
                let tieude = prompt('nhập tiêu đề : ')
            if(typeof arr[`tepghichu/${tieude}.txt`] !== 'undefined') {
                const data = fs.readFileSync(`tepghichu/${tieude}.txt`, "utf8");
                    console.log(data); 
                    return note();
            }
            else {
                console.log('Tệp bạn nhập chưa đúng ');
                return chon2();
            }
            }
        }
    }


    else if(select === '3')
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


    else if(select === '4')
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
    else if(select === '5')
    {
        process.on('exit', function() {  
            return console.log(`Bạn đã thoát chương trình thành công ! `);
        });
    }

