import { useState } from "react";
import image1 from "../assets/productGallery/image1.png";
import image2 from "../assets/productGallery/image2.png";
import image3 from "../assets/productGallery/image3.png";
import image4 from "../assets/productGallery/image4.png";
import image5 from "../assets/productGallery/image5.png";
import image6 from "../assets/productGallery/image6.png";
import image7 from "../assets/productGallery/image7.png";
import image8 from "../assets/productGallery/image8.png";
import image9 from "../assets/productGallery/image9.png";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <div id="gallery">
      <section className="my-12 text-center md:mx-28">
        <h1 className="mb-8 text-3xl font-bold text-zinc-800">
          Product Gallery
        </h1>
        <div className="flex flex-col items-center space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
          {images.map((data, index) => (
            <div
              key={`image-container-${index}`}
              className="w-full max-w-xs md:max-w-none"
            >
              <img
                src={data}
                alt={`Product ${index + 1}`}
                className="mx-auto cursor-pointer transition-all duration-300 hover:brightness-55"
                onClick={() => openModal(data)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div className="relative h-full w-full max-w-6xl">
            {/* Close Button */}
            <button
              className="absolute -top-2 -right-2 z-20 cursor-pointer rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-gray-100 md:top-4 md:right-4"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close image"
            >
              <svg
                className="h-6 w-6 text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Zoom Button */}
            <button
              className="absolute -right-2 -bottom-2 z-20 cursor-pointer rounded-full bg-black p-3 shadow-lg transition-all hover:scale-110 hover:bg-black md:right-4 md:bottom-4"
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom();
              }}
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isZoomed ? (
                  // Zoom Out Icon (magnifying glass with minus sign)
                  <>
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    <path d="M13 10H7" />
                  </>
                ) : (
                  // Zoom In Icon (magnifying glass with plus sign)
                  <>
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    <path d="M13 10H7M10 13V7" />
                  </>
                )}
              </svg>
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/30 p-3 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/50 disabled:opacity-30"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = images.indexOf(selectedImage);
                    const prevIndex =
                      (currentIndex - 1 + images.length) % images.length;
                    setSelectedImage(images[prevIndex]);
                    setIsZoomed(false);
                  }}
                  aria-label="Previous image"
                  disabled={images.indexOf(selectedImage) === 0}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/30 p-3 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/50 disabled:opacity-30"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = images.indexOf(selectedImage);
                    const nextIndex = (currentIndex + 1) % images.length;
                    setSelectedImage(images[nextIndex]);
                    setIsZoomed(false);
                  }}
                  aria-label="Next image"
                  disabled={images.indexOf(selectedImage) === images.length - 1}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Display */}
            <div className="flex h-full items-center justify-center">
              <img
                src={selectedImage}
                alt={`Product ${images.indexOf(selectedImage) + 1}`}
                className={`max-h-[90vh] max-w-full cursor-grab rounded-lg shadow-2xl transition-all duration-300 ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleZoom();
                }}
                style={{
                  objectFit: isZoomed ? "contain" : "scale-down",
                  transform: isZoomed ? "scale(1.5)" : "scale(1)",
                }}
              />
            </div>

            {/* Image Counter (Optional) */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-md">
                {images.indexOf(selectedImage) + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductGallery;
