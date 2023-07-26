const modifiers = {
  imgThumbnailActive: 'img-showcase__thumbnail--active'
};


//SHOPPING CART MODAL
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
  });
}


// IMAGE SHOWCASE
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');
const elsImgThumbnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');

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