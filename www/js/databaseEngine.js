/*
====================================
SIWRAD Vision
Product Database Engine
Version : 1.0.0
Build   : 010
====================================
*/

const DatabaseEngine = {

    key: "SIWRAD_PRODUCTS",

    getProducts() {

        const data = localStorage.getItem(this.key);

        if (data) {
            return JSON.parse(data);
        }

        return [];

    },

    saveProducts(products) {

        localStorage.setItem(
            this.key,
            JSON.stringify(products)
        );

    },

    addProduct(product) {

        const products = this.getProducts();

        product.id = Date.now();

        product.createdAt = new Date().toLocaleString("id-ID");

        products.push(product);

        this.saveProducts(products);

    },

    getProduct(id) {

        const products = this.getProducts();

        return products.find(p => p.id == id);

    },

    deleteProduct(id) {

        const products = this.getProducts()
            .filter(p => p.id != id);

        this.saveProducts(products);

    }

};