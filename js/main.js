const modifiers = {
  imgThumbnailActive: 'img-showcase__thumbnail--active',
  siteHeaderCartModalOpen: 'site-header__cart-modal--open',
  lightboxOpen: 'lightbox--open'
};


//SHOPPING CART MODAL
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
  });
}


// IMAGE SHOWCASE
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');
const elsImgThumbnailButton = elProductPageGallery.querySelectorAll('.js-showcase-thumbnail-button');

elsImgThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    })

    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    elImgShowcaseActiveImg.src = elButton.dataset.showcaseImgActive;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.showcaseImgActive} 1x, ${elButton.dataset.showcaseImgRetina} 2x`;
  });

})


// LIGHTBOX
const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightboxClose = document.querySelector('.lightbox__close');

if (elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function (){
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
}

if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
}


const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-lightbox-thumbnail-button');

elsImgLightboxThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    elsImgLightboxThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    })

    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    elImgLightboxActiveImg.src = elButton.dataset.showcaseImgActive;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.showcaseImgActive} 1x, ${elButton.dataset.showcaseImgRetina} 2x`;
  });

})


// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function () {

    // Find active element
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsImgLightboxThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.showcaseImgActive;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.showcaseImgActive} 1x, ${elNextActiveItem.children[0].dataset.showcaseImgRetina} 2x`;
  });
}

if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function () {

    // Find active element
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elNextActiveItem = elsImgLightboxThumbnail[elsImgLightboxThumbnail.length - 1];
    } else {
      elNextActiveItem = elActiveItem.previousElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.showcaseImgActive;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.showcaseImgActive} 1x, ${elNextActiveItem.children[0].dataset.showcaseImgRetina} 2x`;
  });
}


// PRODUCT COUNT
const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');
const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');
const elProductQty = document.querySelector('.product-info__quantity');


if (elProductQtyIncrementButton) {
  elProductQtyIncrementButton.addEventListener('click', function () {
    elProductQty.textContent = parseInt(elProductQty.textContent, 10) + 1;
  });
}

if (elProductQtyDecrementButton) {
  elProductQtyDecrementButton.addEventListener('click', function () {
    const qty = parseInt(elProductQty.textContent, 10);

    if (qty > 0) {
      elProductQty.textContent = qty - 1;
    }
  });
}