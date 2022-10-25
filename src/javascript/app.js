/**
 * Base
 */
import '../scss/app.scss';

/**
 * Javascript
 */

class App {
  constructor() {
    this.heroSection = document.querySelector('.heroContainer');
    this.heroSectionImage = document.querySelectorAll('.heroContainer__genreSection');

    this.heroSectionImage.forEach((image) => {
      // Add onCLick element event
      image.addEventListener('click', (e) => {
        // Remove the active class of the previous clicked element
        this.heroSectionImage.forEach((image) => {
          image.classList.remove('active');
          image.classList.add('disabled');
        });

        // Add the active class to the current clicked element and remove the disabled
        e.target.parentElement.classList.remove('disabled');
        e.target.parentElement.classList.add('active');
      });
    });

    // Disable if click everywhere else
    window.addEventListener('click', (e) => {
      if (e.target.closest('.heroContainer')) return;

      this.heroSectionImage.forEach((image) => {
        image.classList.remove('active');
        image.classList.remove('disabled');
      });
    });
  }
}

const app = new App();
