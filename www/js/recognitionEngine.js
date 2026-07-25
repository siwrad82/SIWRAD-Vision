/*
====================================
SIWRAD Vision
Recognition Engine
Version : 1.0.0
Build   : 014
====================================
*/

const resultImage = document.getElementById("resultImage");
const resultName = document.getElementById("resultName");
const resultCategory = document.getElementById("resultCategory");
const resultSimilarity = document.getElementById("resultSimilarity");
const resultDataset = document.getElementById("resultDataset");
const resultStatus = document.getElementById("resultStatus");

const result = MatchingEngine.match();

if(result){

    const product = result.product;

    if(product.photos && product.photos.depan){
        resultImage.src = product.photos.depan;
    }

    resultName.innerHTML =
        "📦 " + product.name;

    resultCategory.innerHTML =
        "Kategori : " + product.category;

    resultSimilarity.innerHTML =
        "Kemiripan : " + result.similarity + "%";

    const totalPhotos =
        Object.values(product.photos || {})
        .filter(photo => photo).length;

    resultDataset.innerHTML =
        "Dataset : " + totalPhotos + " Foto";

    resultStatus.innerHTML =
        "✅ Produk Dikenali";

}else{

    resultImage.removeAttribute("src");

    resultName.innerHTML =
        "Belum ada dataset.";

    resultCategory.innerHTML = "";

    resultSimilarity.innerHTML = "";

    resultDataset.innerHTML = "";

    resultStatus.innerHTML =
        "Tambahkan dataset terlebih dahulu.";

}

document.getElementById("btnRetry").onclick = function(){

    window.location.href = "camera.html";

};

document.getElementById("btnFinish").onclick = function(){

    window.location.href = "dashboard.html";

};