'use strict';
import insertionQ from 'insertion-query';

const card =
  `<a href="" class="card cards__item">` +
  `<button class="card__delete btn btn--destructive btn--icon" type="button" title="" style="display: none">` +
  `<img class="btn__spinner" src="assets/spinner-light.svg" alt="" />` +
  `<svg class="btn__icon">` +
  `<use xlink:href="styles/icons/sprite.svg#cross"></use>` +
  `</svg>` +
  `</button>` +
  `<div class="card__media">` +
  ` <img class="card__img" data-img-cover src="assets/img-1.jpg" alt="" />` +
  `</div>` +
  `<div class="card__body">` +
  ` <div class="badge-type badge-type--action-rpg">Action RPG</div>` +
  `<h3 class="card__title">Saints Row</h3>` +
  `<div class="card__rating">` +
  `<img src="assets/stars.svg" alt="" />` +
  `<span>1,820</span>` +
  `</div>` +
  `<p class="card__text">Platinum Edition</p>` +
  `</div>` +
  `<div class="card__footer">` +
  `<div class="price">` +
  ` <div class="price__old">$1,299</div>` +
  `<div class="price__current">$649</div>` +
  `</div>` +
  `<div class="badge-sell">-50%</div>` +
  `</div>` +
  `</a>`;

const tag =
  `<li class="select2-selection__choice">` +
  `<button` +
  ` type="button"` +
  ` class="tags-rmv-btn js-total-tags-remove"` +
  ` tabIndex="-1"` +
  ` title="Remove item"` +
  ` aria-label="Remove item">` +
  `<span aria-hidden="true">×</span>` +
  `</button>` +
  `<span class="select2-selection__choice__display js-total-tag-num"></span>` +
  `</li>`;

const mm = (device) => {
  let width = null;
  switch (device) {
    case 'tablet':
      width = '(max-width: 768px)';
      break;
    case 'desktop':
      width = '(min-width: 769px) and (max-width: 1439px)';
      break;
    case 'largeDesktop':
      width = '(min-width: 1440px)';
      break;
  }
  return window.matchMedia(width).matches;
};

const select = $('.js-select');
const multiSelect = $('.js-multi-select');
const addBtn = $('.js-add-btn');
const filterBtn = $('.js-filter-btn');
const accordionBtn = $('.js-accordion-btn');
const accordionBody = $('.js-accordion-body');

function selectionTags() {
  let tagsLength = $('.select2-selection__choice').length;
  if (mm('tablet')) {
    if (tagsLength > 0) {
      $('.select2-selection__choice').css('display', 'none');
      $('.select2-selection--multiple .select2-selection__rendered').append(tag);
      $('.js-total-tag-num').text('+' + tagsLength);
    }
  }
  if (mm('desktop')) {
    if (tagsLength > 1) {
      $('.select2-selection__choice:not(:first-child)').css('display', 'none');
      $('.select2-selection--multiple .select2-selection__rendered').append(tag);
      $('.js-total-tag-num').text('+' + (tagsLength - 1));
    }
  }
  if (mm('largeDesktop')) {
    if (tagsLength > 2) {
      $('.select2-selection__choice:nth-child(n+3)').css('display', 'none');
      $('.select2-selection--multiple .select2-selection__rendered').append(tag);
      $('.js-total-tag-num').text('+' + (tagsLength - 2));
    }
  }
}

$(document).ready(function () {
  new Swiper('.js-toast', {
    effect: 'fade',
    navigation: {
      nextEl: '.js-toast-next',
      prevEl: '.js-toast-prev',
    },
  });

  select.select2({
    minimumResultsForSearch: -1,
  });

  multiSelect.select2({
    multiple: true,
  });

  multiSelect.on('select2:select', function (e) {
    selectionTags();
  });

  $(document).on('click', '.js-total-tags-remove', function (e) {
    multiSelect.val(['1', '2']);
    multiSelect.trigger('change');
  });

  addBtn.click(function () {
    $(card).insertAfter('.card-btn');
  });

  filterBtn.click(function () {
    $('.search__item-s').toggle();
  });

  accordionBtn.on('click', function () {
    if ($(this).hasClass('accordion__btn--active')) {
      $(this).removeClass('accordion__btn--active');
      $(this).siblings('.js-accordion-body').slideUp(200);
    } else {
      accordionBtn.removeClass('accordion__btn--active');
      $(this).addClass('accordion__btn--active');
      accordionBody.slideUp(200);
      $(this).siblings('.js-accordion-body').slideDown(200);
    }
  });
});
