import GalleryItem from './galleryItem';
import images from '../../../static/datas/imagesSourcesGrid.js';

export default class Gallery {
  constructor() {
    this.gallery = document.querySelector('.gallerySection');
    this.galleryItems = [];

    // Create images in grid
    for (let i = 0; i < images.length; i++) {
      const galleryItem = new GalleryItem(images[i].url, images[i].gridArea);
      this.galleryItems.push(galleryItem);
      this.gallery.appendChild(galleryItem.galleryItem);
    }

    // Little anim on mouse move, offset images
    this.gallery.addEventListener('mousemove', (e) => {
      this.galleryItems.map((galleryItem) => {
        galleryItem.galleryItem.style.transform = `translate(${e.clientX * 0.01}%, ${e.clientY * 0.01}%)`;
      });
    });
  }
}
