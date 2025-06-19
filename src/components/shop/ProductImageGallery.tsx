import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "yet-another-react-lightbox/plugins";
// Define the image type
interface Image {
  _id: string;
  url: string;
}

// Define the props interface
interface ProductImageGalleryProps {
  images: Image[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
}) => {
  const [activeImage, setActiveImage] = useState<string>(images[0]?.url || "");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-3 p-0">
          <div className="d-flex flex-row gap-2 flex-md-column">
            {images.map((image, index) => (
              <a
                href="#"
                className={`p-1 bg-transparent image-item rounded-3 ${
                  activeImage === image.url ? "image-active" : ""
                }`}
                key={image._id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveImage(image.url);
                }}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="img-thumbnail"
                  style={{ width: "100%" }}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-9 p-2">
          <div className="card">
            <img
              src={activeImage}
              className="card-img-top"
              alt="Active Product Image"
              onClick={() =>
                handleImageClick(
                  images.findIndex((img) => img.url === activeImage)
                )
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          open={isLightboxOpen}
          index={lightboxIndex}
          close={() => setIsLightboxOpen(false)}
          slides={images.map((image) => ({ src: image.url }))}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 4,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 500,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
        />
      )}
    </div>
  );
};

export default ProductImageGallery;
