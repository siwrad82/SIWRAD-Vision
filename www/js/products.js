/*
====================================
SIWRAD Vision
Products Engine
Version : 1.0.0
Build   : 012
====================================
*/

function loadProducts(){

    const list = document.getElementById("productList");

    const products = DatabaseEngine.getProducts();

    if(products.length === 0){

        list.innerHTML = "<p>Belum ada produk.</p>";

        return;

    }

    let html = "";

    products.forEach(function(product){

        html += `
        <div class="product-card"
             onclick="window.location.href='product-detail.html'">

            <h3>📦 ${product.name}</h3>

            <p>Kategori : ${product.category}</p>

            <p>Harga : Rp ${product.price}</p>

            <p>Dibuat : ${product.createdAt}</p>

        </div>
        `;

    });

    list.innerHTML = html;

}

window.onload = loadProducts;