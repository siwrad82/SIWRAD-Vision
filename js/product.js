/*
====================================
SIWRAD Vision
Product Engine
Version : 1.0.0
Build   : 005
====================================
*/

const ProductEngine = {

    currentProduct: {

        id: "",
        nama: "",
        merek: "",
        kategori: "",
        model: "",
        berat: "",
        satuan: "",

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
        }

    },

    createID() {
        return "PRD-" + Date.now();
    },

    newProduct() {

        this.currentProduct.id = this.createID();

        this.currentProduct.nama = "";
        this.currentProduct.merek = "";
        this.currentProduct.kategori = "";
        this.currentProduct.model = "";
        this.currentProduct.berat = "";
        this.currentProduct.satuan = "";

        this.currentProduct.photos = {
            depan: "",
            belakang: "",
            kiri: "",
            kanan: "",
            atas: "",
            bawah: "",
            miringKiri: "",
            miringKanan: ""
        };

        this.currentProduct.dataset = {
            totalFoto: 0,
            status: "Belum Lengkap"
        };

    },

    saveIdentity(data) {

        this.currentProduct.nama = data.nama;
        this.currentProduct.merek = data.merek;
        this.currentProduct.kategori = data.kategori;
        this.currentProduct.model = data.model;
        this.currentProduct.berat = data.berat;
        this.currentProduct.satuan = data.satuan;

    },

    getProduct() {
        return this.currentProduct;
    }

};

// Membuat produk baru saat aplikasi dijalankan
ProductEngine.newProduct();