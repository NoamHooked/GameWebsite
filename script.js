// Select DOM elements
const gridImages = document.querySelectorAll(".grid-image");
const slideshow = document.getElementById("slideshow");
const slideshowImage = document.getElementById("slideshow-img");
const closeButton = document.querySelector(".close");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Debug log: Check if elements are selected
console.log("Grid Images:", gridImages);
console.log("Slideshow Element:", slideshow);
console.log("Slideshow Image Element:", slideshowImage);
console.log("Close Button:", closeButton);
console.log("Prev Button:", prevButton);
console.log("Next Button:", nextButton);

// Array to hold image sources for navigation
const imageSources = Array.from(gridImages).map((img) => img.src);
console.log("Image Sources:", imageSources);

let currentIndex = 0;

// Show the slideshow overlay
function showOverlay(index) {
  console.log(`Opening overlay for image index: ${index}`);
  currentIndex = index;
  slideshowImage.src = imageSources[currentIndex];
  slideshow.classList.remove("hidden");
  console.log(`Current image source: ${slideshowImage.src}`);
}

// Close the slideshow overlay
function closeOverlay() {
  console.log("Closing overlay");
  slideshow.classList.add("hidden");
}

// Navigate to the previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  console.log(`Navigating to previous image. New index: ${currentIndex}`);
  slideshowImage.src = imageSources[currentIndex];
  console.log(`Current image source: ${slideshowImage.src}`);
}

// Navigate to the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  console.log(`Navigating to next image. New index: ${currentIndex}`);
  slideshowImage.src = imageSources[currentIndex];
  console.log(`Current image source: ${slideshowImage.src}`);
}

// Attach event listeners to grid images
gridImages.forEach((img, index) => {
  console.log(`Adding click event listener to image at index: ${index}`);
  img.addEventListener("click", () => {
    console.log(`Image clicked at index: ${index}`);
    showOverlay(index);
  });
});

// Attach event listeners to slideshow controls
closeButton.addEventListener("click", () => {
  console.log("Close button clicked");
  closeOverlay();
});
prevButton.addEventListener("click", () => {
  console.log("Prev button clicked");
  showPreviousImage();
});
nextButton.addEventListener("click", () => {
  console.log("Next button clicked");
  showNextImage();
});

console.log("Script loaded and event listeners attached.");
