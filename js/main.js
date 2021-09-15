/**
 * Thêm sinh viên
 */

// Biến toàn cục(global)
//  Tạo thể hiện của lớp DanhSachSinhVien
var dssv = new DanhSachSinhVien();
var validation = new Validation();

// Hàm rút gọi cú pháp document.getElementById
function getELE(id) {
    return document.getElementById(id);
}

function hienthiTable(mang) {
    // content sẽ chứa nhiều thẻ tr: mỗi thẻ 1 sv.
    var content = "";
    // Duyệt mảng 
    // item: 1 phần tử trong mảng
    // index: vị trí của phần tử trong mảng
    mang.map(function (item, index) {
        // item đại diện cho 1 sv
        // content = content + thẻ tr
        // template literal/ string template
        content += `<tr>
            <td>${item.maSV}</td>
            <td>${item.tenSV}</td>
            <td>${item.email}</td>
            <td>${item.matKhau}</td>
            <td>${item.ngaySinh}</td>
            <td>${item.khoaHoc}</td>
            <td>${item.dtb}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSV('${item.maSV}')" >Xóa</button>
            </td>
            <td>
                <button class="btn btn-info" onclick="xemSV('${item.maSV}')" >Xem</button>
            </td>
            
        </tr>` ;
    });
    getELE("tbodySinhVien").innerHTML = content;
}

// Local Storage Nơi lưu dữ liệu ở trong trình duyệt web
// Lưu mảng SV xuống Local Storage
function setLocalStorage() {
    //localStorage: Biến đối tượng có sẵn của js
    //localStorage chỉ chấp nhận kiểu dữ liệu json
    //Chuyển dssv.mang từ kiểu mảng sang json
    localStorage.setItem("DSSV", JSON.stringify(dssv.mangSV));
}

// Lấy data từ local storage để hiển thị
function getLocalStorage() {
    // getItem sẽ lấy dữ liệu lên là Json
    // chuyển từ Json thành mảng
    if (localStorage.getItem != null) {
        dssv.mangSV = JSON.parse(localStorage.getItem("DSSV"))
        hienthiTable(dssv.mangSV);
    }
}
getLocalStorage();

function themSV() {
    //B1: Lấy thông tin từ form
    var maSV = getELE("txtMaSV").value;
    var tenSV = getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var matKhau = getELE("txtPass").value;
    var ngaySinh = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var diemToan = getELE("txtDiemToan").value;
    var diemLy = getELE("txtDiemLy").value;
    var diemHoa = getELE("txtDiemHoa").value;

    var isValid = true;
    //Kiểm tra mã SV
    isValid &= validation.checkEmpty(maSV, "spanMaSV", "Mã sinh viên không được để trống!")&&validation.checkID(maSV,"spanMaSV","Mã Sinh Viên bị Trùng!",dssv.mangSV);
    // Kiểm tra tên SV
    isValid &= validation.checkEmpty(tenSV, "spanTenSV", "tên sinh viên không được để trống!")&&validation.checkName(tenSV,"spanTenSV","Tên sinh viên phải là kí tự chữ!");
    // Kiểm tra email
    isValid &= validation.checkEmpty(email, "spanEmailSV", "Mail sinh viên không được để trống!")&&validation.checkEmail(email,"spanEmailSV","Email có kí tự không hợp lệ");
    // Kiểm tra khóa học
    isValid &= validation.checkKhoaHoc("khSV","spanKhoaHoc","Hãy chọn khóa học")
    // Kiểm tra password
    isValid &= validation.checkEmpty(matKhau, "spanMatKhau", "Hãy nhập mật khẩu!")&&validation.checkPass(matKhau,"spanMatKhau","Vui lòng nhập Mật Khẩu từ 6 đến 12 kí tự");
    //Kiểm tra điểm Toán
    isValid &= validation.checkEmpty(diemToan, "spanToan", "Hãy nhập điểm Toán!")&&validation.checkScore(diemToan,"spanToan","Nhập điểm Toán bằng số từ 0 đến 10")
    //Kiểm tra điểm Lý
    isValid &= validation.checkEmpty(diemLy, "spanLy", "Hãy nhập điểm Lý!")&&validation.checkScore(diemLy,"spanLy","Nhập điểm Lý bằng số từ 0 đến 10")
    //Kiểm tra điểm Hóa
    isValid &= validation.checkEmpty(diemHoa, "spanHoa", "Hãy nhập điểm Hóa!")&&validation.checkScore(diemHoa,"spanHoa","Nhập điểm Hóa bằng số từ 0 đến 10")

    if (isValid) {
        //Tất cả dữ liệu hợp lệ
        // Để lưu thông tin hoặc lấy thông tìn từ lớp đối tượng Class chúng ta phải tạo thể hiện của class (instance)
        var sv = new SinhVien(maSV, tenSV, email, matKhau, ngaySinh, khoaHoc, parseFloat(diemToan), parseFloat(diemLy), parseFloat(diemHoa));

        // toFixed(2):  Làm tròn 2 số thập phân sau dấu chấm
        sv.dtb = sv.tinhDTB().toFixed(1);

        // Lưu vào danh sách sinh viên
        dssv.themSinhVien(sv);

        // Hiển thị lên table
        hienthiTable(dssv.mangSV);

        // Lưu xuống local storage
        setLocalStorage();
    }



}

function xoaSV(ma) {
    dssv.xoaSinhVien(ma);
    hienthiTable(dssv.mangSV);
    setLocalStorage();
}
function xemSV(ma) {
    var viTri = dssv.timViTri(ma);
    var svXem = dssv.mangSV[viTri];

    getELE("txtMaSV").disabled = true;

    getELE("txtMaSV").value = svXem.maSV;
    getELE("txtTenSV").value = svXem.tenSV;
    getELE("txtEmail").value = svXem.email;
    getELE("txtPass").value = svXem.matKhau;
    getELE("txtNgaySinh").value = svXem.ngaySinh;
    getELE("khSV").value = svXem.khoaHoc;
    getELE("txtDiemToan").value = svXem.diemToan;
    getELE("txtDiemLy").value = svXem.diemLy;
    getELE("txtDiemHoa").value = svXem.diemHoa;
    return svXem
}
function capNhatSV() {
    var maSV = getELE("txtMaSV").value;
    var maSV = getELE("txtMaSV").value;
    var tenSV = getELE("txtTenSV").value;
    var email = getELE("txtEmail").value;
    var matKhau = getELE("txtPass").value;
    var ngaySinh = getELE("txtNgaySinh").value;
    var khoaHoc = getELE("khSV").value;
    var diemToan = getELE("txtDiemToan").value;
    var diemLy = getELE("txtDiemLy").value;
    var diemHoa = getELE("txtDiemHoa").value;

    var sv = new SinhVien(maSV, tenSV, email, matKhau, ngaySinh, khoaHoc, parseFloat(diemToan), parseFloat(diemLy), parseFloat(diemHoa));

    sv.dtb = sv.tinhDTB().toFixed(1);

    dssv.capNhatSinhVien(sv)
    hienthiTable(dssv.mangSV);

    setLocalStorage();
}
function resetForm() {
    getELE("formQLSV").reset();
    getELE("txtMaSV").disabled = false;
}
function timKiemTheoTen(){
    var tuKhoaTK = getELE("txtSearch").value;
    var mangQK = dssv.timKiem(tuKhoaTK);
    hienthiTable(mangQK);
}

// getELE("btnSearch").addEventListener("click",timKiemTheoTen);
getELE("txtSearch").addEventListener("keyup",timKiemTheoTen);