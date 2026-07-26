/*
====================================
SIWRAD Vision
Recognition Engine
Version : 1.0.2
Build   : 015
====================================
*/
/*
====================================
Recognition Flow v2
Build : 016
====================================
*/

const recognizePhoto =
    localStorage.getItem("recognizePhoto");
const resultImage = document.getElementById("resultImage");
const resultName = document.getElementById("resultName");
const resultCategory = document.getElementById("resultCategory");
const resultSimilarity = document.getElementById("resultSimilarity");
const resultDataset = document.getElementById("resultDataset");
const resultStatus = document.getElementById("resultStatus");
const rankingList = document.getElementById("rankingList");

const result = MatchingEngine.match({

    photo: recognizePhoto

});

if (result) {

    const product = result.product;

    if (product.photos && product.photos.depan) {
        resultImage.src = product.photos.depan;
    }

    resultName.textContent = "📦 " + product.name;
    resultCategory.textContent = "Kategori : " + product.category;
    resultSimilarity.textContent =
    "Kemiripan : " +
    result.similarity +
    "%";

    const totalPhotos = Object.values(product.photos || {})
        .filter(photo => photo).length;

    resultDataset.textContent =
    "Dataset : " +
    result.totalProduct +
    " Produk";
      const resultCandidate =
    document.getElementById("resultCandidate");

if(resultCandidate){

    resultCandidate.textContent =
        "Top Candidate : " +
        result.totalCandidate;

}
    result.totalProduct +
    " Produk";
    resultStatus.textContent = "✅ Produk Dikenali";

    if (rankingList) {

        let html = "";
        const medal = ["🥇","🥈","🥉"];

        result.ranking.slice(0,3).forEach(function(item,index){

            html += `
<div class="ranking-card">

<div class="ranking-title">
${medal[index]} ${item.product.name}
</div>

<div>
Kategori : ${item.product.category}
</div>

<div class="ranking-score">
Kemiripan : ${item.score}%
</div>

</div>
`;

        });

        rankingList.innerHTML = html;

    }

} else {

    resultImage.removeAttribute("src");
    resultName.textContent = "Belum ada dataset.";
    resultCategory.textContent = "";
    resultSimilarity.textContent = "";
    resultDataset.textContent = "";
    resultStatus.textContent = "Tambahkan dataset terlebih dahulu.";

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