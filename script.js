// =========================================
// PHOTO CAROUSEL
// =========================================


// All pictures in the carousel

const photos = [
    "images/Annika.jpeg",
    "images/Bilbao.jpeg",
    "images/Handball.jpeg",
    "images/Roma.jpeg",
    "images/SpainAlicante.jpeg",
    "images/Travel.jpeg",
    "images/matcha.jpeg",
    "images/prague.jpeg"
];


// Start with the first image

let currentPhoto = 0;


// Find elements from the HTML

const heroPhoto =
    document.getElementById("heroPhoto");

const dotsContainer =
    document.getElementById("carouselDots");


// =========================================
// SHOW A PHOTO
// =========================================

function showPhoto(index) {

    currentPhoto = index;

    // fade out
    heroPhoto.style.opacity = "0";


    // wait briefly before changing picture
    setTimeout(function () {

        heroPhoto.src = photos[currentPhoto];

        // fade back in
        heroPhoto.style.opacity = "1";

        updateDots();

    }, 200);
}


// =========================================
// NEXT PHOTO
// =========================================

function nextPhoto() {

    currentPhoto = currentPhoto + 1;


    // If we reach the end,
    // go back to the beginning

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;
    }


    showPhoto(currentPhoto);
}


// =========================================
// PREVIOUS PHOTO
// =========================================

function previousPhoto() {

    currentPhoto = currentPhoto - 1;


    // If we go before the first picture,
    // jump to the last picture

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;
    }


    showPhoto(currentPhoto);
}


// =========================================
// CREATE DOTS
// =========================================

photos.forEach(function (photo, index) {

    const dot =
        document.createElement("span");


    dot.classList.add("carousel-dot");


    // Clicking a dot opens that picture

    dot.addEventListener(
        "click",
        function () {

            showPhoto(index);

        }
    );


    dotsContainer.appendChild(dot);

});


// =========================================
// UPDATE DOTS
// =========================================

function updateDots() {

    const dots =
        document.querySelectorAll(".carousel-dot");


    dots.forEach(function (dot, index) {

        if (index === currentPhoto) {

            dot.classList.add("active");

        }

        else {

            dot.classList.remove("active");

        }

    });

}


// Make the first dot active immediately

updateDots();
