// =========================================
// COVERFLOW CAROUSEL
// =========================================

const coverflow = document.getElementById("coverflow");

const cards = Array.from(
    document.querySelectorAll(".coverflow-card")
);

let currentIndex = 0;

let swipeLocked = false;


// =========================================
// UPDATE CAROUSEL
// =========================================

function updateCarousel() {

    const total = cards.length;

    cards.forEach(function (card, index) {

        // Alle Positionsklassen entfernen
        card.className = "coverflow-card";

        let difference = index - currentIndex;


        // Endloses Carousel
        if (difference > total / 2) {
            difference = difference - total;
        }

        if (difference < -total / 2) {
            difference = difference + total;
        }


        // Hauptbild
        if (difference === 0) {
            card.classList.add("active");
        }

        // Direkt links
        else if (difference === -1) {
            card.classList.add("prev");
        }

        // Direkt rechts
        else if (difference === 1) {
            card.classList.add("next");
        }

        // Zweites Bild links
        else if (difference === -2) {
            card.classList.add("prev-far");
        }

        // Zweites Bild rechts
        else if (difference === 2) {
            card.classList.add("next-far");
        }

    });
}


// =========================================
// NEXT PHOTO
// =========================================

function nextPhoto() {

    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    updateCarousel();
}


// =========================================
// PREVIOUS PHOTO
// =========================================

function previousPhoto() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    updateCarousel();
}


// =========================================
// TOUCHPAD
// =========================================

coverflow.addEventListener(
    "wheel",
    function (event) {

        // Nur horizontales Wischen verwenden
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {

            event.preventDefault();

            if (swipeLocked) {
                return;
            }

            if (Math.abs(event.deltaX) < 8) {
                return;
            }

            swipeLocked = true;


            if (event.deltaX > 0) {
                nextPhoto();
            } else {
                previousPhoto();
            }


            setTimeout(function () {
                swipeLocked = false;
            }, 450);

        }

    },
    {
        passive: false
    }
);


// =========================================
// MOBILE / TOUCHSCREEN
// =========================================

let touchStartX = 0;


coverflow.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.touches[0].clientX;

    },
    {
        passive: true
    }
);


coverflow.addEventListener(
    "touchend",
    function (event) {

        const touchEndX =
            event.changedTouches[0].clientX;

        const difference =
            touchStartX - touchEndX;


        // Sehr kleine Bewegungen ignorieren
        if (Math.abs(difference) < 40) {
            return;
        }


        if (difference > 0) {
            nextPhoto();
        } else {
            previousPhoto();
        }

    },
    {
        passive: true
    }
);


// =========================================
// CLICK ON SIDE IMAGE
// =========================================

cards.forEach(function (card, index) {

    card.addEventListener(
        "click",
        function () {

            currentIndex = index;

            updateCarousel();

        }
    );

});


// =========================================
// INITIAL START
// =========================================

updateCarousel();
