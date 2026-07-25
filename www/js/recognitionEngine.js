/*
====================================
SIWRAD Vision
Recognition Engine
Version : 1.0.0
Build   : 013
====================================
*/

const products = DatabaseEngine.getProducts();

const resultImage = document.getElementById("resultImage");
const resultName = document.getElementById("resultName");
const resultCategory = document.getElementById("resultCategory");
const resultSimilarity = document.getElementById("resultSimilarity");
const resultStatus = document.getElementById("resultStatus");

if(products.length > 0){

    // Prototype:
    // sementara menggunakan produk terakhir
    const product = products[products.length - 1];

    if(product.photos && product.photos.depan){
        resultImage.src = product.photos.depan;
    }

    resultName.innerHTML =
        "📦 " + product.name;

    resultCategory.innerHTML =
        "Kategori : " + product.category;

    resultSimilarity.innerHTML =
        "Kemiripan : 100%";

    resultStatus.innerHTML =
        "✅ Produk Dikenali";

}else{

    resultName.innerHTML =
        "Belum ada dataset.";

    resultCategory.innerHTML = "";

    resultSimilarity.innerHTML = "";

    resultStatus.innerHTML =
        "Tambahkan dataset terlebih dahulu.";

}

document.getElementById("btnRetry").onclick = function(){

    window.location.href = "camera.html";

};

document.getElementById("btnFinish").onclick = function(){

    window.location.href = "dashboard.html";

};