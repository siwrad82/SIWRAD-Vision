/*
====================================
SIWRAD Vision
Product Engine
Version : 1.0.0
Build   : 010
====================================
*/

const productList = document.getElementById("productList");

function loadProducts(){

    const products = DatabaseEngine.getProducts();

    if(products.length === 0){

        productList.innerHTML = `
            <p>Belum ada produk.</p>
            <p>Silakan tambahkan produk baru.</p>
        `;

        return;

    }

    productList.innerHTML = "";

    products.forEach(function(product){

        productList.innerHTML += `

        <div class="product-card">

            <h3>📦 ${product.name}</h3>

            <p>Kategori : ${product.category}</p>

            <p>Dibuat : ${product.createdAt}</p>

        </div>

        `;

    });

}

loadProducts();

document.getElementById("btnAddProduct").onclick = function(){

    window.location.href = "product-form.html";

};
const btnDashboard = document.getElementById("btnDashboard");

if(btnDashboard){
    btnDashboard.onclick = function(){
        window.location.href = "dashboard.html";
    };
}