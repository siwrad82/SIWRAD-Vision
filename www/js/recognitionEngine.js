/*
====================================
SIWRAD Vision
Recognition Engine
Version : 1.0.0
Build   : 013
====================================
*/

const result = MatchingEngine.match();

if(result){

    const product = result.product;

    resultImage.src = product.photos.depan;

    resultName.innerHTML =
        "📦 " + product.name;

    resultCategory.innerHTML =
        "Kategori : " + product.category;

    resultSimilarity.innerHTML =
        "Kemiripan : " + result.similarity + "%";

    resultStatus.innerHTML =
        "✅ Produk Dikenali";

}else{

    resultName.innerHTML = "Produk tidak ditemukan";

    resultCategory.innerHTML = "";

    resultSimilarity.innerHTML = "";

    resultStatus.innerHTML =
        "❌ Tidak ada dataset.";

}

const resultImage = document.getElementById("resultImage");
const resultName = document.getElementById("resultName");
const resultCategory = document.getElementById("resultCategory");
const resultSimilarity = document.getElementById("resultSimilarity");
const resultDataset = document.getElementById("resultDataset");
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
const totalPhotos =
    Object.values(product.photos || {})
    .filter(photo => photo).length;

resultDataset.innerHTML =
    "Dataset : " + totalPhotos + " Foto";
    resultStatus.innerHTML =
        "✅ Produk Dikenali";

}else{
  resultDataset.innerHTML = "";
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