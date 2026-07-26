/*
====================================
SIWRAD Vision
Camera Engine
Version : 1.0.0
Build   : 007
====================================
*/

const video = document.getElementById("cameraPreview");
/*
====================================
Camera Mode
Build : 016
====================================
*/

const urlParams = new URLSearchParams(window.location.search);

const cameraMode =
    urlParams.get("mode") || "training";
async function startCamera() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            },
            audio: false
        });

        video.srcObject = stream;

        console.log("Camera berhasil dibuka.");

    } catch (err) {

        alert("Kamera tidak dapat dibuka.");
        console.error(err);

    }

}

window.onload = function () {

    startCamera();

    if (typeof SIWRAD !== "undefined") {
        SIWRAD.enableEngine("camera");
    }

};
const btnBack = document.getElementById("btnBack");

btnBack.addEventListener("click", () => {
    window.history.back();
});