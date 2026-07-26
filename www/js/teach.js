/*
====================================
Project   : SIWRAD Vision
Version   : 1.0.0
Build     : 007
Module    : Teach Engine
====================================
*/

function startCamera() {

    const productName = document.getElementById("productName").value.trim();
    const productCategory = document.getElementById("productCategory").value.trim();

    if (productName === "" || productCategory === "") {
        alert("Silakan isi Nama Produk dan Kategori Produk terlebih dahulu.");
        return;
    }

    localStorage.setItem("productName", productName);
    localStorage.setItem("productCategory", productCategory);

    window.location.href = "camera.html?mode=training";
}