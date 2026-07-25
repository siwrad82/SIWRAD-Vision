/*
====================================
SIWRAD Vision
Product Detail Engine
Version : 1.0.0
Build   : 012
====================================
*/

const products = DatabaseEngine.getProducts();

if(products.length > 0){

    const product = products[products.length - 1];

    document.getElementById("productName").innerHTML =
    product.name || "-";

    document.getElementById("productCategory").innerHTML =
    "Kategori : " + (product.category || "-");

    document.getElementById("productPrice").innerHTML =
    "Harga : Rp " + (product.price || "-");

    document.getElementById("productBarcode").innerHTML =
    "Barcode : " + (product.barcode || "-");

    if(product.photos && product.photos.depan){

        document.getElementById("productImage").src =
        product.photos.depan;

    }

    const gallery = document.getElementById("photoGallery");

    if(product.photos){

        Object.values(product.photos).forEach(function(photo){

            if(photo){

                const img = document.createElement("img");

                img.src = photo;

                gallery.appendChild(img);

            }

        });

    }

}

document.getElementById("btnBack").onclick = function(){

    window.location.href = "products.html";

};

document.getElementById("btnDelete").onclick = function(){

    const products = DatabaseEngine.getProducts();

    if(products.length === 0){

        return;

    }

    DatabaseEngine.deleteProduct(
        products[products.length - 1].id
    );

    alert("Produk berhasil dihapus.");

    window.location.href = "products.html";

};

document.getElementById("btnEdit").onclick = function(){

    alert("Fitur Edit Produk akan hadir pada Build berikutnya.");

};