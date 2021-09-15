var nhanVien = ["NV001","Nguyễn Thị Nhân Viên",20,"NV002","Nguyễn Thị Nhân Viên 2",20]

/**
 * Object
 * Giúp lưu trữ thông tin của 1 đối tượng thực tế
 * 
 */
// var myFunction = function(){

// }

var nhanVien ={
    //thuộc tính(property)
    maNV: "NV001",
    tenNV: "Nguyễn Thị Nhân Viên",
    age:20,
    //Phương thức (method)
    //this: con trỏ - context(ngữ cảnh)
    //this nằm trong đối tượng nhân viên => ngữ cảnh this là nhanVien => truy xuất thuộc tính của đối tượng
    chamCong:function(){
        console.log("Hello" + this.tenNV);
    }
}

//Truy xuất thuộc tính của Object
console.log(nhanVien.maNV);
//Truy xuất phương thức của Object
nhanVien.chamCong();
