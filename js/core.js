/*
====================================
SIWRAD Vision
Core Engine
Version : 1.0.0
Build   : 005
Codename: Core Foundation
====================================
*/

const SIWRAD = {

    appName: "SIWRAD Vision",
    version: "1.0.0",
    build: "005",
    codename: "Core Foundation",

    engines: {
        product: false,
        knowledge: false,
        photo: false,
        camera: false,
        dataset: false,
        recognition: false
    },

    start() {

        console.log("=================================");
        console.log(this.appName);
        console.log("Version : " + this.version);
        console.log("Build   : " + this.build);
        console.log("=================================");

    },

    enableEngine(name){

        if(this.engines.hasOwnProperty(name)){

            this.engines[name]=true;

            console.log(name+" Engine Aktif");

        }

    },

    status(){

        console.table(this.engines);

    }

};

SIWRAD.start();