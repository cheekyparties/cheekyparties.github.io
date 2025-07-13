document.addEventListener('DOMContentLoaded', function() {
    // --- Configuration ---
    // Add the filenames of your photos to this list.
    // These images must be in your /assets/images/ folder.
    const images = [
        'bathbrush.avif',
        'pocket.avif',
        'stumpbelt.jpeg',
        'cheeky_chair.jpeg'
        'holdingstrap.avif'
        'stumpbelt.jpeg'
        // Add more image filenames here, e.g., 'photo5.jpg',
    ];

    // --- Random Image Logic ---
    const imageElement = document.getElementById('carousel-image');
    
    if (imageElement) {
        // Get the base path from the existing image src to build the new one
        const imageBasePath = imageElement.src.substring(0, imageElement.src.lastIndexOf('/') + 1);
        
        // Pick a random image from the list
        const randomImageFile = images[Math.floor(Math.random() * images.length)];
        
        // Set the image source to the new random image
        imageElement.src = imageBasePath + randomImageFile;
    }
});
