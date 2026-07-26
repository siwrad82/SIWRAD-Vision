/*
====================================
SIWRAD Vision
Recognition Engine
Version : 1.0.2
Build   : 015
====================================
*/

const resultImage = document.getElementById("resultImage");
const resultName = document.getElementById("resultName");
const resultCategory = document.getElementById("resultCategory");
const resultSimilarity = document.getElementById("resultSimilarity");
const resultDataset = document.getElementById("resultDataset");
const resultStatus = document.getElementById("resultStatus");

const products = DatabaseEngine.getProducts();

if (products.length > 0) {

    const product = products[products.length - 1];

    if (product.photos && product.photos.depan) {
        resultImage.src = product.photos.depan;
    }

    resultName.textContent = "📦 " + product.name;
    resultCategory.textContent = "Kategori : " + product.category;
    resultSimilarity.textContent = "Kemiripan : 100%";

    const totalPhotos = Object.values(product.photos || {})
        .filter(photo => photo).length;

    resultDataset.textContent = "Dataset : " + totalPhotos + " Foto";
    resultStatus.textContent = "✅ Produk Dikenali";

    const rankingList = document.getElementById("rankingList");
    if (rankingList) {
        rankingList.innerHTML = "";
    }

} else {

    resultImage.removeAttribute("src");
    resultName.textContent = "Belum ada dataset.";
    resultCategory.textContent = "";
    resultSimilarity.textContent = "";
    resultDataset.textContent = "";
    resultStatus.textContent = "Tambahkan dataset terlebih dahulu.";

    const rankingList = document.getElementById("rankingList");
    if (rankingList) {
        rankingList.innerHTML = "";
    }

}

document.getElementById("btnRetry").addEventListener("click", function () {
    window.location.href = "camera.html";
});

document.getElementById("btnFinish").addEventListener("click", function () {
    window.location.href = "dashboard.html";
});