// --- Popup ÅBN: via "Tilmeld dig"-knappen ---
document.getElementById("tilmeld-btn2").addEventListener("click", () => {
  // document.getElementById("popup-title2").textContent =
  // document.getElementById("tilmeld-btn2").dataset.title;
  //  document.getElementById("popup-description2").textContent =
  //  document.getElementById("tilmeld-btn2").dataset.description;

  document.getElementById("offer-toggle2").checked = true;
});

// --- Popup LUK: via kryds-knap ---
document.getElementById("close-btn2").addEventListener("click", () => {
  document.getElementById("offer-toggle2").checked = false;
});

// --- Popup LUK: klik på overlay udenfor indholdet ---
document.getElementById("popup-overlay2").addEventListener("click", (e) => {
  if (e.target.id === "popup-overlay2") {
    document.getElementById("offer-toggle2").checked = false;
  }
});

const appDownloadTrigger = document.getElementById("app-download-trigger");
const appDownloadPopupOverlay = document.getElementById(
  "app-download-popup-overlay"
);
const appDownloadPopupClose = document.getElementById(
  "app-download-popup-close"
);

appDownloadTrigger.addEventListener("click", () => {
  appDownloadPopupOverlay.style.display = "flex";
});

appDownloadPopupClose.addEventListener("click", () => {
  appDownloadPopupOverlay.style.display = "none";
});

appDownloadPopupOverlay.addEventListener("click", (e) => {
  if (e.target === appDownloadPopupOverlay) {
    appDownloadPopupOverlay.style.display = "none";
  }
});
