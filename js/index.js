
$('.calendar').datepicker({
    inline: true,
    firstDay: 0,
    showOtherMonths: true,
    selectOtherMonths: true,
    dayNamesMin: ['Pn.', 'Wt.', 'Sr.', 'Czw.', 'Pt.', 'Sob.', 'Ndz.'],
    monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec ", "Lipiec ", "Sierpień ", "Wrzesień ", "Październik", "Listopad", "Grudzień"],
    altFormat: "dd.mm.yy"

});


$('.slider').slick({
    dots: true,
    nextArrow: ' <i class="material-icons arrow-size arrow-right">keyboard_arrow_right</i>',
    prevArrow: '<i class="material-icons arrow-size arrow-left">keyboard_arrow_left</i>',
    // slidesToShow: 3,
    slidesToScroll: 1,
});


$('.select').selectmenu().selectmenu("menuWidget")
    .addClass("overflow");

const cardItem = document.querySelector(".parking-list")


// open card form
const openForm = (event) => {
    event.preventDefault()
    if (event.target.classList.value === "btn") {
        const currentCard = event.target.closest(".parking-card")
        currentCard.querySelector(".parking-info__services").classList.add("hide")
        currentCard.querySelector(".parking-data").classList.remove("hide")
        currentCard.querySelector(".parking-price").classList.remove("hide")
        currentCard.classList.add("parking-card__form")
    }
}
cardItem.addEventListener("click", openForm)


// open successful Reservation Popup

const successfulReservationPopup = (event) => {
    event.preventDefault()
    if (event.target.classList.value.includes("send-btn")) {
        const currentCard = event.target.closest(".parking-card")
        currentCard.querySelector(".parking-info__services").classList.remove("hide")
        currentCard.querySelector(".parking-data").classList.add("hide")
        currentCard.querySelector(".parking-price").classList.add("hide")
        currentCard.classList.remove("parking-card__form")

        const popupReservation = document.querySelector(".popup-reservation")
        popupReservation.classList.remove("hide")
    }
}
cardItem.addEventListener("click", successfulReservationPopup)




// open price popup

const openPricePopup = (event)=>{
    console.log("woek")
    if(event.target.classList.value.includes("price-info__more")){
        console.log("asdsdf")
        const currentCard = event.target.closest(".parking-list__item")
        currentCard.querySelector(".popup-price").classList.remove("hide")
    }
}

cardItem.addEventListener("click", openPricePopup)




// close popup window

const closeBtn = document.querySelector("body")
const closeReservationPopup = (event) => {
    if(event.target.classList.value.includes("close")){
        const currentPopup = event.target.closest(".popup-mark");
        currentPopup.classList.add("hide");
    }
}

closeBtn.addEventListener("click",closeReservationPopup)

