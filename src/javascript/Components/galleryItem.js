export default class GalleryItem {
  constructor(url, gridArea) {
    this.galleryItem = document.createElement('div');
    this.galleryItem.classList.add('gallerySection__image-container');

    // Set grid Areas of images
    for (const key in gridArea) {
      this.galleryItem.style[key] = gridArea[key];
    }

    this.galleryItemImage = document.createElement('img');
    this.galleryItemImage.src = url;

    this.galleryItem.appendChild(this.galleryItemImage);
  }
}
