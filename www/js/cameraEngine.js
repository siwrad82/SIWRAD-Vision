/*
====================================
SIWRAD Vision
Camera Engine
Version : 1.0.0
Build   : 016
Codename: Recognition Flow v2
====================================
*/

const video = document.getElementById("cameraPreview");
const btnBack = document.getElementById("btnBack");

/*
====================================
Camera Mode
====================================
*/

const urlParams = new URLSearchParams(window.location.search);

const cameraMode = urlParams.get("mode") || "training";

/*
====================================
Start Camera
====================================
*/

async function startCamera() {

    console.log("Camera Mode :", cameraMode);

    if (!video) {
        alert("Video Preview tidak ditemukan.");
        return;
    }

    if (!navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia) {

        alert("Browser tidak mendukung Camera API.");
        return;
    }

    try {

        const stream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: {
                    ideal: "environment"
                }
            },

            audio: false

        });

        video.srcObject = stream;

        await video.play();

        console.log("Camera berhasil dibuka.");

    } catch (err) {

        console.error(err);

        alert(
            "Kamera tidak dapat dibuka.\n\n" +
            err.name +
            "\n" +
            err.message
        );

    }

}

/*
====================================
Page Loaded
====================================
*/

window.onload = function () {

    startCamera();

    if (typeof SIWRAD !== "undefined") {

        SIWRAD.enableEngine("camera");

    }

};

/*
====================================
Back Button
====================================
*/

if (btnBack) {

    btnBack.onclick = function () {

        window.history.back();

    };

}