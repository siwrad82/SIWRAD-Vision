/*
====================================
SIWRAD Vision
Recognition Engine
Version : 1.0.1
Build   : 014.1
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

    resultName.innerHTML = "📦 " + product.name;
    resultCategory.innerHTML = "Kategori : " + product.category;
    resultSimilarity.innerHTML = "Kemiripan : 100%";

    const totalPhotos = Object.values(product.photos || {})
        .filter(photo => photo).length;

    resultDataset.innerHTML = "Dataset : " + totalPhotos + " Foto";
    resultStatus.innerHTML = "✅ Produk Dikenali";
const rankingList = document.getElementById("rankingList");

let html = "";

result.ranking.slice(0, 3).forEach(function(item, index){

    const medal = ["🥇", "🥈", "🥉"];

    html += `
<div class="ranking-card">

<div class="ranking-title">
${medal[index]} ${item.name}
</div>

<div>
Kategori : ${item.category}
</div>

<div class="ranking-score">
Kemiripan : ${item.score}%
</div>

</div>
`;

});

rankingList.innerHTML = html;
} else {
document.getElementById("rankingList").innerHTML = "";
    resultImage.removeAttribute("src");
    resultName.innerHTML = "Belum ada dataset.";
    resultCategory.innerHTML = "";
    resultSimilarity.innerHTML = "";
    resultDataset.innerHTML = "";
    resultStatus.innerHTML = "Tambahkan dataset terlebih dahulu.";

}

document.getElementById("btnRetry").onclick = function () {
    window.location.href = "camera.html";
};

document.getElementById("btnFinish").onclick = function () {
    window.location.href = "dashboard.html";
};