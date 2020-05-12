
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var butOrder = document.querySelector('.promo-baskets__order');
var modalCart = document.querySelector('.modal-cart');
var modalOverlay = document.querySelector('.modal-overlay');
var cardCart = document.querySelectorAll('.card__cart');

// Menu
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
  }
});

// Modal for baskets

if (butOrder) {
butOrder.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.add('modal-cart--show');
  modalOverlay.classList.add('modal-overlay--show');
});
}

if (cardCart) {
for( var i = 0; i < cardCart.length; i++)
  cardCart[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.add('modal-cart--show');
    modalOverlay.classList.add('modal-overlay--show');
});
}

if (modalOverlay) {
modalOverlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCart.classList.remove('modal-cart--show');
  modalOverlay.classList.remove('modal-overlay--show');
});
}

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains('modal-cart--show')) {
      evt.preventDefault();
      modalCart.classList.remove('modal-cart--show');
      modalOverlay.classList.remove('modal-overlay--show');
    }
  }
});
