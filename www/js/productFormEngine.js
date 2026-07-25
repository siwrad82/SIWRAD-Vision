/*
====================================
SIWRAD Vision
Product Form Engine
Version : 1.0.0
Build   : 011
====================================
*/

const btnStartCamera = document.getElementById("btnStartCamera");
const btnBack = document.getElementById("btnBack");

btnStartCamera.onclick = function(){

    const name = document.getElementById("productName").value.trim();
    const category = document.getElementById("productCategory").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const barcode = document.getElementById("productBarcode").value.trim();

    if(name === "" || category === "" || price === ""){

        alert("Nama Produk, Kategori, dan Harga wajib diisi.");

        return;

    }

    localStorage.setItem("productName", name);
    localStorage.setItem("productCategory", category);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("productBarcode", barcode);

    window.location.href = "camera.html";

};

btnBack.onclick = function(){

    window.location.href = "dashboard.html";

};