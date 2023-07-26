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
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');
const elsImgThumbnailButton = document.querySelectorAll('.js-showcase-thumbnail-button');

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