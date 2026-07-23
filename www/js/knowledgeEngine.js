/*
====================================
SIWRAD Vision
Knowledge Engine
Version : 1.0.0
Build   : 004
Codename: Product Knowledge
====================================
*/

const ProductKnowledge = {

    version: "1.0.0",

    products: [],

    createProduct(data) {

        const product = {

            id: "PRD-" + Date.now(),

            identity: {
                nama: data.nama || "",
                merek: data.merek || "",
                kategori: data.kategori || "",
                model: data.model || ""
            },

            attribute: {
                berat: data.berat || "",
                satuan: data.satuan || ""
            },

            photos: {
                depan: "",
                belakang: "",
                kiri: "",
                kanan: "",
                atas: "",
                bawah: "",
                miringKiri: "",
                miringKanan: ""
            },

            dataset: {
                totalFoto: 0,
                status: "Belum Lengkap"
            },

            createdAt: new Date().toISOString()

        };

        this.products.push(product);

        return product;

    },

    getProducts() {
        return this.products;
    }

};