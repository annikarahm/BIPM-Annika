// =========================================
// COVERFLOW CAROUSEL
// =========================================


// Find carousel

const coverflow =
    document.getElementById("coverflow");


// Find all cards

const cards =
    Array.from(
        document.querySelectorAll(
            ".coverflow-card"
        )
    );


// Current middle image

let currentIndex = 0;


// Prevent one trackpad movement
// from skipping many images

let swipeLocked = false;



// =========================================
// UPDATE CAROUSEL
// =========================================

function updateCarousel() {

    const total =
        cards.length;


    cards.forEach(
        function (card, index) {


            /*
            Remove all position classes.
            */

            card.className =
                "coverflow-card";


            /*
            Calculate how far this card
            is from the current card.
            */

            let difference =
                index - currentIndex;


            /*
            These two conditions make
            the carousel endless.
            */

            if (
                difference >
                total / 2
            ) {

                difference =
                    difference - total;

            }


            if (
                difference <
                -total / 2
            ) {

                difference =
                    difference + total;

            }



            /*
            Middle image
            */

            if (
                difference === 0
            ) {

                card.classList.add(
                    "active"
                );

            }
