import React, { useState } from 'react';
import '../Gallery.css'; // Supondo que você use um arquivo CSS para estilização

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`gallery-container ${className}`} style={{ width, height }}>
      <div className="gallery-main-image" style={{ borderRadius: radius }}>
        <img src={images[currentImageIndex].src} alt={`Imagem ${currentImageIndex + 1}`} />
        <button
          className="gallery-arrow-left"
          onClick={previousImage}
          disabled={currentImageIndex === 0}
        >
          <img src="/assets/icons/arrow-left.svg" alt="Seta para a esquerda" />
        </button>
        <button
          className="gallery-arrow-right"
          onClick={nextImage}
          disabled={currentImageIndex === images.length - 1}
        >
          <img src="/assets/icons/arrow-right.svg" alt="Seta para a direita" />
        </button>
      </div>
      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              className={`gallery-thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
              style={{ width: '117px', height: '95px', borderRadius: radius }}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;