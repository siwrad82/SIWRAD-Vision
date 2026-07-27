/*
====================================
SIWRAD Vision
Photo Engine
Version : 2.0.0
Build   : 016.14
Codename: Stabilization
====================================
*/

const PhotoSteps = [
    "Foto Depan",
    "Foto Belakang",
    "Foto Kiri",
    "Foto Kanan",
    "Foto Atas",
    "Foto Bawah",
    "Foto Miring Kiri",
    "Foto Miring Kanan"
];

let currentStep = 0;

const captureButton = document.getElementById("btnCapture");
const stepTitle = document.getElementById("stepTitle");

function updateStepTitle() {

    if (stepTitle) {

        stepTitle.innerHTML =
            PhotoSteps[currentStep] +
            " (" + (currentStep + 1) + "/8)";

    }

}

function saveCurrentPhoto(photoData) {

    localStorage.setItem(
        PhotoSteps[currentStep],
        photoData
    );

}

captureButton.onclick = function () {

    if (!video || !video.srcObject) {

        alert("Camera belum siap.");
        return;

    }

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    const photoData = canvas.toDataURL("image/jpeg");

    // ==========================
    // Recognition Mode
    // ==========================

    if (cameraMode === "recognize") {

        localStorage.setItem(
            "recognizePhoto",
            photoData
        );

        stopCamera();

        window.location.href = "recognize.html";

        return;

    }

    // ==========================
    // Training Mode
    // ==========================

    saveCurrentPhoto(photoData);

    currentStep++;

    if (currentStep >= PhotoSteps.length) {

        stopCamera();

        window.location.href = "review.html";

        return;

    }

    updateStepTitle();

};

window.onload = function () {

    updateStepTitle();

};