/**
 * Bài 1: Tính tiền lương nhân viên
 *
 * Đầu vào:
 * - Lấy số ngày làm từ user
 *
 * Xử lý:
 * - Kiểm tra dữ liệu nhập
 * - Lương 1 ngày = 100000
 * - tienLuong = 100000 * soNgayLam
 *
 * Đầu ra:
 * - Hiển thị tiền lương lên pInfo_1
 */

const btnTinhLuong = document.getElementById("btnTinhLuong");

btnTinhLuong.onclick = function () {
  const inputSoNgayLam = document.getElementById("soNgayLam").value;
  const pInfo_1 = document.getElementById("pInfo_1");

  if (inputSoNgayLam === "") {
    pInfo_1.innerHTML = "Vui lòng nhập số ngày làm";
  } else {
    const soNgayLam = inputSoNgayLam * 1;

    if (soNgayLam < 0 || soNgayLam % 1 !== 0) {
      pInfo_1.innerHTML = "Vui lòng nhập số ngày làm là số nguyên không âm";
    } else {
      const LUONG_MOT_NGAY = 100000;
      const tienLuong = LUONG_MOT_NGAY * soNgayLam;

      pInfo_1.innerHTML = `Tiền lương: ${tienLuong.toLocaleString("vi-VN")} VND`;
    }
  }
};

/**
 * Bài 2: Tính giá trị trung bình
 *
 * Đầu vào:
 * - Lấy 5 số từ user
 *
 * Xử lý:
 * - Kiểm tra người dùng đã nhập đủ 5 số
 * - tong = tổng 5 số
 * - trungBinh = tong / 5
 *
 * Đầu ra:
 * - Hiển thị giá trị trung bình lên pInfo_2
 */

const btnTinhTrungBinh = document.getElementById("btnTinhTrungBinh");

btnTinhTrungBinh.onclick = function () {
  const input_1 = document.getElementById("number_1").value;
  const input_2 = document.getElementById("number_2").value;
  const input_3 = document.getElementById("number_3").value;
  const input_4 = document.getElementById("number_4").value;
  const input_5 = document.getElementById("number_5").value;

  const pInfo_2 = document.getElementById("pInfo_2");

  if (
    input_1 === "" ||
    input_2 === "" ||
    input_3 === "" ||
    input_4 === "" ||
    input_5 === ""
  ) {
    pInfo_2.innerHTML = "Vui lòng nhập đủ 5 số";
  } else {
    const number_1 = input_1 * 1;
    const number_2 = input_2 * 1;
    const number_3 = input_3 * 1;
    const number_4 = input_4 * 1;
    const number_5 = input_5 * 1;

    const tong = number_1 + number_2 + number_3 + number_4 + number_5;
    const trungBinh = tong / 5;

    pInfo_2.innerHTML = `Giá trị trung bình: ${trungBinh}`;
  }
};

/**
 * Bài 3: Quy đổi tiền USD sang VND
 *
 * Đầu vào:
 * - Lấy số tiền USD từ user
 *
 * Xử lý:
 * - Kiểm tra dữ liệu nhập
 * - TY_GIA = 23500
 * - tienVND = soUSD * TY_GIA
 *
 * Đầu ra:
 * - Hiển thị số tiền VND lên pInfo_3
 */

const btnQuyDoi = document.getElementById("btnQuyDoi");

btnQuyDoi.onclick = function () {
  const inputSoUSD = document.getElementById("soUSD").value;
  const pInfo_3 = document.getElementById("pInfo_3");

  if (inputSoUSD === "") {
    if (inputSoUSD === "") {
      pInfo_3.innerHTML = "Vui lòng nhập số tiền USD";
    }
  } else {
    const soUSD = inputSoUSD * 1;

    if (soUSD < 0) {
      pInfo_3.innerHTML = "Số tiền USD không được âm";
    } else {
      const TY_GIA = 23500;
      const tienVND = soUSD * TY_GIA;

      pInfo_3.innerHTML = `${soUSD} USD = ${tienVND.toLocaleString("vi-VN")} VND`;
    }
  }
};

/**
 * Bài 4: Tính diện tích và chu vi hình chữ nhật
 *
 * Đầu vào:
 * - Lấy chiều dài
 * - Lấy chiều rộng
 *
 * Xử lý:
 * - Kiểm tra dữ liệu nhập
 * - dienTich = chieuDai * chieuRong
 * - chuVi = (chieuDai + chieuRong) * 2
 *
 * Đầu ra:
 * - Hiển thị diện tích và chu vi lên pInfo_4
 */

const btnTinhHCN = document.getElementById("btnTinhHCN");

btnTinhHCN.onclick = function () {
  const inputChieuDai = document.getElementById("chieuDai").value;
  const inputChieuRong = document.getElementById("chieuRong").value;

  const pInfo_4 = document.getElementById("pInfo_4");

  if (inputChieuDai === "" || inputChieuRong === "") {
    pInfo_4.innerHTML = "Vui lòng nhập đầy đủ chiều dài và chiều rộng";
  } else {
    const chieuDai = inputChieuDai * 1;
    const chieuRong = inputChieuRong * 1;

    if (chieuDai <= 0 || chieuRong <= 0) {
      pInfo_4.innerHTML = "Chiều dài và chiều rộng phải lớn hơn 0";
    } else {
      const dienTich = chieuDai * chieuRong;
      const chuVi = (chieuDai + chieuRong) * 2;

      pInfo_4.innerHTML = `Diện tích: ${dienTich} - Chu vi: ${chuVi}`;
    }
  }
};

/**
 * Bài 5: Tính tổng 2 ký số
 *
 * Đầu vào:
 * - Lấy số có 2 chữ số từ user
 *
 * Xử lý:
 * - Kiểm tra dữ liệu nhập
 * - Kiểm tra số nguyên từ 10 đến 99
 * - soHangDonVi = so % 10
 * - soHangChuc = (so - soHangDonVi) / 10
 * - tongKySo = soHangChuc + soHangDonVi
 *
 * Đầu ra:
 * - Hiển thị tổng 2 ký số lên pInfo_5
 */

const btnTinhTongKySo = document.getElementById("btnTinhTongKySo");

btnTinhTongKySo.onclick = function () {
  const inputSo = document.getElementById("soHaiChuSo").value;
  const pInfo_5 = document.getElementById("pInfo_5");

  if (inputSo === "") {
    pInfo_5.innerHTML = "Vui lòng nhập số có 2 chữ số";
  } else {
    const so = inputSo * 1;

    if (so < 10 || so > 99 || so % 1 !== 0) {
      pInfo_5.innerHTML = "Vui lòng nhập số nguyên từ 10 đến 99";
    } else {
      const soHangDonVi = so % 10;
      const soHangChuc = (so - soHangDonVi) / 10;
      const tongKySo = soHangChuc + soHangDonVi;

      pInfo_5.innerHTML = `Tổng là ${soHangChuc} + ${soHangDonVi} = ${tongKySo}`;
    }
  }
};

function moBai(soBai) {
  document.querySelectorAll(".bai-page").forEach(function (bai) {
    bai.classList.add("hidden");
  });

  document.getElementById(`bai${soBai}Page`).classList.remove("hidden");

  document.querySelectorAll(".nav-bai").forEach(function (nut) {
    nut.classList.remove("bg-blue-500", "bg-violet-500", "text-white");
    nut.classList.add("bg-white");
  });

  const nutDangChon = document.getElementById(`navBai${soBai}`);
  nutDangChon.classList.remove("bg-white");
  nutDangChon.classList.add("bg-violet-500", "text-white");
}
