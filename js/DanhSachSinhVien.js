// Lớp DanhSachSinhVien => Chứa nhiều đối tượng SV

/**
 * Lớp DanhSachSinhVien
 * => Chứa nhiều đối tượng sv
 * => Chứa các phương thức xử lý mảng sinh viên
 */
function DanhSachSinhVien(){
    // Thuộc tính
    this.mangSV=[];

    // Phương thức
    this.themSinhVien = function(sv){
        this.mangSV.push(sv);
    }

    this.timViTri = function(ma){
        /**
         * cho viTri = -1
         * Nếu tìm được sv thì gán index tìm được vào viTri
         * Ngược lại thì trả kq viTri=-1 (không thay đổi kết quả của viTri)
         */
        var viTri = -1;
        this.mangSV.map(function(item,index){
            if(item.maSV==ma){
                viTri = index; 
            }
        })
        return viTri;
    }

    this.xoaSinhVien = function(ma){
        var viTri = this.timViTri(ma);
        if(viTri>=0){
            //Tìm được
            this.mangSV.splice(viTri, 1);
        }
        else console.log("Không tìm được sinh viên")
    }
    this.capNhatSinhVien = function(sv) {
        var viTri = this.timViTri(sv.maSV);
        if(viTri>=0){
            //Tìm được
            this.mangSV[viTri] = sv;
        }
        else console.log("Không tìm được sinh viên")
    }
}
//prototype (object): Dùng để thêm thuộc tính + phương thức cho lớp đối tượng mà không cần thêm trực tiếp trong lớp đối tượng

/**
 * Tìm kiếm:
 * 1.Từ khóa tìm kiếm
 * 2.Tên sinh viên lấy từ mảng SV
 * => So sánh 2 cái: tuKhoaTK == tenSV ==> Giới hạn so sánh phải trùng chính xác từng kí tự nên hạn chế
 * VD:...
 * 
 * Xài indexof: Nếu trong string có tồn tại từ khóa đang tìm thì trả về vị trí. Nếu không sẽ trả về -1
 * 
 * Vì sự khác biết giữa chữ hoa và chữ thường nên ta chuyển hết về chữ thường cho dễ tìm kiếm. Sử dụng toLowerCase.
 */
DanhSachSinhVien.prototype.timKiem = function(tuKhoaTK){
    var mangQK=[];
    //Chuyển từ khóa tìm kiếm sang chữ thường và bỏ khoảng trắng 2 bên
    var lowerTK = tuKhoaTK.trim().toLowerCase();
    this.mangSV.map(function(item,index){
        //Chuyển tên sinh viên sang chữ thường
        var tenThuong = item.tenSV.trim().toLowerCase();
        var kq = tenThuong.indexOf(lowerTK);
        if(kq>=0){
            mangQK.push(item);
        }
    });
    return mangQK;

}