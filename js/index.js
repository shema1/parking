
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



const openForm = (event) => {

    const currentCard = event.target.closest(".parking-card")

    currentCard.querySelector(".parking-info__services").classList.add("hide")
    currentCard.querySelector(".parking-data").classList.remove("hide")
    currentCard.querySelector(".parking-price").classList.remove("hide")
    currentCard.classList.add("parking-card__form")
}

const successfulReservationPopup = (event) => {
    event.preventDefault()
    
    const currentCard = event.target.closest(".parking-card")
    currentCard.querySelector(".parking-info__services").classList.remove("hide")
    currentCard.querySelector(".parking-data").classList.add("hide")
    currentCard.querySelector(".parking-price").classList.add("hide")
    currentCard.classList.remove("parking-card__form")

    const popupReservation = document.querySelector(".popup-reservation")
    popupReservation.classList.remove("hide")
}

const closeReservationPopup = () => {
    const popupReservation = document.querySelector(".popup-reservation")
    popupReservation.classList.add("hide")

    const info = document.querySelector(".parking-info__services")
    info.classList.remove("hide")
    const form = document.querySelector(".parking-data")
    form.classList.add("hide")
    const price = document.querySelector(".parking-price")
    price.classList.add("hide")
    const parcingCard = document.querySelector(".parking-card")
    parcingCard.classList.remove("parking-card__form")
}

const openPricePopup = (event)=>{

    document.querySelector(".popup-price").classList.remove("hide")
}
const closePricePopup = (event)=>{

    document.querySelector(".popup-price").classList.add("hide")
}