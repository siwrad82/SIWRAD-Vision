/*
====================================
SIWRAD Vision
Photo Engine
Version : 1.0.0
Build   : 002
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

function getCurrentStep() {
    return PhotoSteps[currentStep];
}

function nextStep() {
    if (currentStep < PhotoSteps.length - 1) {
        currentStep++;
        return true;
    }
    return false;
}

function resetSteps() {
    currentStep = 0;
}
const captureButton = document.getElementById("btnCapture");
const nextButton = document.getElementById("btnNext");

captureButton.onclick = function(){

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    const photoData = canvas.toDataURL("image/jpeg");

    localStorage.setItem(
        getCurrentStep(),
        photoData
    );

    alert(getCurrentStep() + " berhasil disimpan");

};


nextButton.onclick = function(){

    if(nextStep()){

        document.getElementById("stepTitle").innerHTML =
        getCurrentStep() + " (" + (currentStep + 1) + "/8)";

    } else {

        alert("Semua foto sudah selesai");

    }

};