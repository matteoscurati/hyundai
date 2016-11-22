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

document.addEventListener('DOMContentLoaded', function(){
  var elements = document.querySelectorAll('[data-class-toggle]');

  Array.prototype.forEach.call(elements, function(el, i) {
    var classToToggle = el.getAttribute('data-class-toggle');
    var elToToggle = document.querySelector(el.getAttribute('data-element'));

    el.addEventListener('click', function(e) {
      var method = elToToggle.classList.contains(classToToggle) ? 'remove' : 'add';
      elToToggle.classList[method](classToToggle);
      e.stopPropagation();
      e.preventDefault();
    });
  });
});
