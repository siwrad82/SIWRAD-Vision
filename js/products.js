/*
====================================
SIWRAD Vision
Dataset Manager
Version : 1.0.0
Build   : 005
====================================
*/

function loadProducts(){

    const list=document.getElementById("productList");

    const data=ProductKnowledge.getProducts();

    if(data.length===0){

        list.innerHTML="<p>Belum ada dataset produk.</p>";

        return;

    }

    let html="";

    data.forEach(function(product){

        html+=`

        <div style="border:1px solid #555;padding:10px;margin:10px;border-radius:10px;">

        <b>${product.identity.nama}</b><br>

        ID : ${product.id}<br>

        Status : ${product.dataset.status}<br>

        Foto : ${product.dataset.totalFoto}/8

        </div>

        `;

    });

    list.innerHTML=html;

}

window.onload=loadProducts;