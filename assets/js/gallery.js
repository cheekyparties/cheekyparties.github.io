document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.history-gallery');
    if (!gallery) return; // Don't run if there's no gallery on the page

    const imgElement = gallery.querySelector('.gallery-image');
    const prevButton = gallery.querySelector('.gallery-nav.prev');
    const nextButton = gallery.querySelector('.gallery-nav.next');
    const counterElement = gallery.querySelector('.gallery-counter');

    // Get the image paths from the data attribute (created by Jekyll)
    const images = JSON.parse(gallery.dataset.images || '[]');
    let currentIndex = 0;

    if (images.length === 0) {
        gallery.style.display = 'none'; // Hide gallery if no images found
        return;
    }

    function updateGallery() {
        if (images[currentIndex]) {
            imgElement.src = images[currentIndex];
            counterElement.textContent = `${currentIndex + 1} / ${images.length}`;
        }
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    // Initialize gallery
    updateGallery();
});
