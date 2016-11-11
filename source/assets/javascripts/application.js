import $ from 'jQuery';
import classie from 'desandro-classie';

require('jquery-ui');
require('modernizr');
require('wow');

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});

function sizeOnScroll() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector("#logo");
    if (distanceY > shrinkOn) {
      classie.add(header,"is-smaller");
    } else {
      if (classie.has(header,"is-smaller")) {
        classie.remove(header,"is-smaller");
      }
    }
  });
}

window.onload = sizeOnScroll();


function toggleModalOne() {
  const modalOne = $('#first-dialog');
  const openOne = $('#first-dialog__open');
  const closeOne = $('.first-dialog__close');

  $(openOne).click(() => {
    if ($(modalOne).hasClass('is-active')) {
      $(modalOne).removeClass('is-active');
    } else {
      $(modalOne).addClass('is-active');
    }
  });

  $(closeOne).click(() => {
    if ($(modalOne).hasClass('is-active')) {
      $(modalOne).removeClass('is-active');
    }
  });
};

function toggleModalTwo() {
  const modalTwo = $('#second-dialog');
  const openTwo = $('#second-dialog__open');
  const closeTwo = $('.second-dialog__close');

  $(openTwo).click(() => {
    if ($(modalTwo).hasClass('is-active')) {
      $(modalTwo).removeClass('is-active');
    } else {
      $(modalTwo).addClass('is-active');
    }
  });

  $(closeTwo).click(() => {
    if ($(modalTwo).hasClass('is-active')) {
      $(modalTwo).removeClass('is-active');
    }
  });
};

function toggleModalThird() {
  const modalThird = $('#third-dialog');
  const openThird = $('#third-dialog__open');
  const closeThird = $('.third-dialog__close');

  $(openThird).click(() => {
    if ($(modalThird).hasClass('is-active')) {
      $(modalThird).removeClass('is-active');
    } else {
      $(modalThird).addClass('is-active');
    }
  });

  $(closeThird).click(() => {
    if ($(modalThird).hasClass('is-active')) {
      $(modalThird).removeClass('is-active');
    }
  });
};

function toggleModalFourth() {
  const modalFourth = $('#fourth-dialog');
  const openFourth = $('#fourth-dialog__open');
  const closeFourth = $('.fourth-dialog__close');

  $(openFourth).click(() => {
    if ($(modalFourth).hasClass('is-active')) {
      $(modalFourth).removeClass('is-active');
    } else {
      $(modalFourth).addClass('is-active');
    }
  });

  $(closeFourth).click(() => {
    if ($(modalFourth).hasClass('is-active')) {
      $(modalFourth).removeClass('is-active');
    }
  });
};

$(document).ready(() => {
  toggleModalOne();
  toggleModalTwo();
  toggleModalThird();
  toggleModalFourth();
});
