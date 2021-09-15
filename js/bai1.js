/**
 * B1: lấy dữ liệu từ form (khi click)
 * B2: tạo đối tượng và lưu thông tin vào thuộc tính
 * + maSV, tenSV, loai, diemToan, diemVan
 * + tinhDTB, xepLoai
 * 
 * B3: Hiển thị * 
 */

function hienThi(){
    var txtMa = document.getElementById("txtMaSV").value;
    var txtTen = document.getElementById("txtTenSV").value;
    var selLoai = document.getElementById("loaiSV").value;
    var txtToan =  Number(document.getElementById("txtDiemToan").value);
    var txtVan =  Number(document.getElementById("txtDiemVan").value);

    console.log(txtMa,txtTen,selLoai,txtToan,txtVan);

    var sinhVien ={
        //thuộc tính
        maSV:txtMa,
        tenSV:txtTen,
        loai:selLoai,
        diemToan:txtToan,
        diemVan:txtVan,
        //phương thức
        tinhDTB:function(){
        //   var dtb = (this.diemToan + this.diemVan)/2;
        //   return dtb;
          return (this.diemToan + this.diemVan)/2;
        },
        xepLoai:function(dtb){
            if(dtb>5){
                return "Trên trung bình";
            }else{
                return "Dưới trung bình";
            }
        }
    }  


    document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
    document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
    document.getElementById("spanLoaiSV").innerHTML = sinhVien.loai;
    document.getElementById("spanDTB").innerHTML = sinhVien.tinhDTB();
    // var dtb = sinhVien.tinhDTB();
    // document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai(dtb);
    document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai(sinhVien.tinhDTB());


}

