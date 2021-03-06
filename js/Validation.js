function Validation(){
    //Phương thức
    //Kiểm tra ô nhập liệu có bị trống hay k
    this.checkEmpty = function(inputVal,spanID,message){
        // .trim(): Xóa khoảng trắng ở trước và sau chuỗi
        if(inputVal.trim()==""){
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        else{
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    // Kiểm tra mã trùng
    this.checkID = function(inputVal,spanID,message,mang){
        // Kiểm tra mã đã tồn tại trong mảng chưa
        var isExist = false;
        // Some: lấy mảng ra đem so sánh điều kiện và trả về giá trị true hoặc false
        isExist= mang.some(function(item){
            return item.maSV === inputVal.trim() ;
        });
        if(isExist){
            // Mã bị trùng, không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        else{
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    // kiểm tra tên sv
    this.checkName = function(inputVal,spanID,message){
        //RegExp: Chuyển từ string sáng regular expressions
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$") ;
        if(pattern.test(inputVal)){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkEmail = function(inputVal,spanID,message){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputVal.match(mailFormat)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkKhoaHoc = function(selID,spanID,message){
        var optIndex = document.getElementById(selID).selectedIndex;
        if(optIndex!=0){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkPass = function(inputVal,spanID,message){
        var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
        if(inputVal.match(passFormat)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkScore = function(inputVal,spanID,message){
        var ScoreFormat = /^(\d{1,2}(\.\d{1,2})?)$/;
        if(inputVal.match(ScoreFormat)){
            // hợp lệ
            if(inputVal>=0&&inputVal<=10){
                document.getElementById(spanID).innerHTML = "";
                return true;
            }
            else{
                document.getElementById(spanID).innerHTML = message;
                return false;
            }
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }

    }
    
}