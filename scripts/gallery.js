// gallery.js
export function initGallery() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const captionText = document.getElementById('caption');
  const galleryItems = document.querySelectorAll('.gallery__item');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          lightbox.style.display = "block";
          const highResSrc = this.getAttribute('data-highres');
          lightboxImg.src = highResSrc;
          captionText.innerHTML = this.getAttribute('data-caption');
      });
  });

  closeBtn.addEventListener('click', function() {
      lightbox.style.display = "none";
  });

  lightbox.addEventListener('click', function(event) {
      if (event.target !== lightboxImg) {
          lightbox.style.display = "none";
      }
  });
}
