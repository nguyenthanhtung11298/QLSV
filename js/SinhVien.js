//Khai báo lớp đối tượng sinh viên
//Chứa các thông tin chung của nhiều sinh vien
//ES5: khai báo lớp đối tượng (class) bằng từ khóa function
// Pascal case: 
function SinhVien(ma,ten,email,mk,ngay,kh,toan,ly,hoa){
    //thuộc tính
    //this giúp truy xuất thuộc tính của lớp đối tượng
    this.maSV = ma;
    this.tenSV = ten;
    this.email = email;
    this.matKhau = mk;
    this.ngaySinh = ngay;
    this.khoaHoc = kh;
    this.diemToan = toan;
    this.diemLy = ly;
    this.diemHoa = hoa;
    this.dtb = 0;

    //Phương thức
    this.tinhDTB = function(){
        return (this.diemToan + this.diemLy + this.diemHoa)/3;
    }
}