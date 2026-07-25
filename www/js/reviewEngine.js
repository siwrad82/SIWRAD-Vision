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

    DatabaseEngine.addProduct({

    name: localStorage.getItem("productName"),

    category: localStorage.getItem("productCategory"),

    price: localStorage.getItem("productPrice"),

    barcode: localStorage.getItem("productBarcode"),

    photos:{

        depan: localStorage.getItem("Foto Depan"),
        belakang: localStorage.getItem("Foto Belakang"),
        kiri: localStorage.getItem("Foto Kiri"),
        kanan: localStorage.getItem("Foto Kanan"),
        atas: localStorage.getItem("Foto Atas"),
        bawah: localStorage.getItem("Foto Bawah"),
        miringKiri: localStorage.getItem("Foto Miring Kiri"),
        miringKanan: localStorage.getItem("Foto Miring Kanan")

    }

});

        photos:{

            depan: localStorage.getItem("Foto Depan"),
            belakang: localStorage.getItem("Foto Belakang"),
            kiri: localStorage.getItem("Foto Kiri"),
            kanan: localStorage.getItem("Foto Kanan"),
            atas: localStorage.getItem("Foto Atas"),
            bawah: localStorage.getItem("Foto Bawah"),
            miringKiri: localStorage.getItem("Foto Miring Kiri"),
            miringKanan: localStorage.getItem("Foto Miring Kanan")

        }

    });

    alert("Produk berhasil disimpan.");

    window.location.href="products.html";

};