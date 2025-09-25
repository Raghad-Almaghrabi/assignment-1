
// Live time updater
const timeEl = document.getElementById("current-time");

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 1000);

document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');

    // Open popup immediately
    popupOverlay.style.display = 'block';

    // Close popup when clicking the close button
    closePopup.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    // Close popup when clicking outside the popup content
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});

var today = new Date();
var curHr = today.getHours();
var popupContent = document.getElementById("popupContent");

if (curHr >= 0 && curHr < 6) {
    popupContent.innerHTML = 'What are you doing that early?';
} else if (curHr >= 6 && curHr < 12) {
    popupContent.innerHTML = 'Good Morning';
} else if (curHr >= 12 && curHr < 17) {
    popupContent.innerHTML = 'Good Afternoon';
} else {
    popupContent.innerHTML = 'Good Evening';
}
