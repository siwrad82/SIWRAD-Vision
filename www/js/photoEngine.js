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
const stepTitle = document.getElementById("stepTitle");
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
function updateStepTitle() {

    stepTitle.innerHTML =
        getCurrentStep() +
        " (" + (currentStep + 1) + "/8)";

}

    cameraMode === "recognize") {

    localStorage.setItem(
        "recognizePhoto",
        photoData
    );

    window.location.href = "recognize.html";

    return;
}
    localStorage.setItem(
    getCurrentStep(),
    photoData
);

// Otomatis lanjut ke foto berikutnya
if (nextStep()) {
updateStepTitle();
    } else {

    alert("Semua foto sudah selesai.");

    window.location.href = "review.html";

    }

};