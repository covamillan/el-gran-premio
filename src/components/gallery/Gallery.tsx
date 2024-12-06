import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import { images } from './gallery-images';
import { useEffect } from 'react';

function Gallery() {
  useEffect(() => {
    const addClickableClass = () => {
      const elementsToAddClass = [
        '.image-gallery-bullets-container',
        '.image-gallery-bullet',
        '.image-gallery-left-nav',
        '.image-gallery-right-nav',
        '.image-gallery-fullscreen-button',
        '.image-gallery-thumbnails-bottom',
        '.image-gallery-icon',
        '.image-gallery-svg',
      ];

      elementsToAddClass.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
          (element as HTMLElement).classList.add('clickable');
        });
      });
    };

    addClickableClass();
  }, []);

  return (
    <>
      <main className="gallery-section">
        <img className="collage" src="../../../collage/IV.jpg" alt="collage" />
        <section className="gallery">
          <ImageGallery
            items={images}
            showPlayButton={false}
            autoPlay={false}
            showBullets={true}
            disableSwipe={false}
          />
        </section>
      </main>
    </>
  );
}

export default Gallery;
