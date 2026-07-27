/*
====================================
SIWRAD Vision
Camera Engine
Version : 2.0.0
Build   : 016.14
Codename: Stabilization
====================================
*/

const video = document.getElementById("cameraPreview");
const btnBack = document.getElementById("btnBack");

let cameraStream = null;

async function startCamera() {

    if (!video) {
        alert("Camera Preview tidak ditemukan.");
        return;
    }

    try {

        cameraStream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: {
                    ideal: "environment"
                }
            },

            audio: false

        });

        video.srcObject = cameraStream;

        await video.play();

        console.log("Camera Ready");

    } catch (err) {

        console.error(err);

        alert(
            "Kamera gagal dibuka.\n\n" +
            err.name +
            "\n" +
            err.message
        );

    }

}

function stopCamera() {

    if (!cameraStream) return;

    cameraStream.getTracks().forEach(track => {

        track.stop();

    });

}

window.onload = function () {

    startCamera();

};

if (btnBack) {

    btnBack.onclick = function () {

        stopCamera();

        window.history.back();

    };

}