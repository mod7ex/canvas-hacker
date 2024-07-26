function convertToImage() {
    // Get the canvas element
    const canvas = document.querySelector('.lower-canvas.animate-canvas-scaling');
    const context = canvas.getContext('2d');

    // Create an image element
    const image = new Image();

    // Assign the canvas content as the source of the image
    image.src = canvas.toDataURL();

    // Create a temporary link element to download the image
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'canvas_image.png';

    // Trigger the link programmatically to start the download
    link.click();
}
