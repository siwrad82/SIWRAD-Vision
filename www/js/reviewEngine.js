/*
====================================
SIWRAD Vision
Review Engine
Version : 1.0.0
Build   : 009
====================================
*/

const PhotoSteps = [
    "Foto Depan",
    "Foto Belakang",
    "Foto Kiri",
    "Foto Kanan",
    "Foto Atas",
    "Foto Bawah",
    "Foto Miring Kiri",
    "Foto Miring Kanan"
];

// Tampilkan semua foto
PhotoSteps.forEach(function(step){

    const img = document.getElementById(step);

    const photo = localStorage.getItem(step);

    if(photo){

        img.src = photo;

    }else{

        img.alt = "Belum ada foto";

    }

});

// Tombol Ulangi Foto
document.getElementById("btnRetake").onclick = function(){

    localStorage.clear();

    window.location.href = "camera.html";

};

// Tombol Simpan Produk
document.getElementById("btnSave").onclick = function(){

    alert("Produk berhasil disimpan.");

    window.location.href = "dashboard.html";

};