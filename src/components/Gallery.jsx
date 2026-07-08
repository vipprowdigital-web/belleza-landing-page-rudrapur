import { motion, AnimatePresence } from "framer-motion";
import { X, ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const FAN_STEP = 9;

const Gallery = ({ gallery = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 1024);
      setCardsPerPage(width < 640 ? 1 : 2);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  if (!gallery || gallery.length === 0) return null;

  const isCarousel = isSmallScreen || gallery.length > 5;

  const safePage =
    currentPage >= Math.ceil(gallery.length / cardsPerPage) ? 0 : currentPage;

  const visibleImages = isCarousel
    ? gallery.slice(
        safePage * cardsPerPage,
        safePage * cardsPerPage + cardsPerPage,
      )
    : gallery;

  const totalPages = Math.ceil(gallery.length / cardsPerPage);

  const goToPage = (page, dir) => {
    setDirection(dir);
    setCurrentPage(page);
  };

  const nextPage = () => goToPage((safePage + 1) % totalPages, 1);
  const prevPage = () => goToPage((safePage - 1 + totalPages) % totalPages, -1);

  const mid = (visibleImages.length - 1) / 2;

  return (
    <section
      className="w-full py-24 px-6 sm:px-16 bg-light overflow-hidden"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`flex flex-row items-center mb-16 gap-4 ${
            isCarousel ? "justify-between" : "justify-center"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isCarousel ? "flex-1 min-w-0 pr-4" : "text-center"}
          >
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">
              A Glimpse Inside
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter">
              Our <span className="text-secondary">Gallery</span>
            </h2>
            {/* <div className="w-16 h-1 bg-primary mt-4" /> */}
          </motion.div>

          {isCarousel && (
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={prevPage}
                className="p-2 border border-primary rounded-full"
                aria-label="Previous images"
              >
                <ChevronLeft size={18} className="text-primary" />
              </button>
              <button
                type="button"
                onClick={nextPage}
                className="p-2 border border-primary rounded-full"
                aria-label="Next images"
              >
                <ChevronRight size={18} className="text-primary" />
              </button>
            </div>
          )}
        </div>

        {/* Fanned Gallery Carousel */}
        <div className="relative py-10">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={safePage}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 120 : -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -120 : 120 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center justify-center flex-nowrap"
            >
              {visibleImages.map((item, index) => {
                const rotate = (index - mid) * FAN_STEP;
                return (
                  <motion.button
                    key={item._id || `${safePage}-${index}`}
                    type="button"
                    initial={{ rotate, y: 20 }}
                    animate={{ rotate, y: 0 }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.12,
                      y: -16,
                      zIndex: 30,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ zIndex: index }}
                    onClick={() => setSelectedImage(item)}
                    className="group relative -ml-8 first:ml-0 sm:-ml-10 w-70 md:w-76 aspect-3/4 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white text-left cursor-pointer shrink-0"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title || "Gallery image"}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/30">
                        <ImageOff size={28} />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.title && (
                      <p className="absolute bottom-3 left-3 right-3 text-light text-xs font-bold uppercase tracking-wide opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {item.title}
                      </p>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {isCarousel && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i, i > safePage ? 1 : -1)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safePage ? "w-6 bg-primary" : "w-2 bg-primary/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-md p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-light" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title || "Gallery image"}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              {selectedImage.title && (
                <p className="text-light text-center mt-4 font-bold uppercase tracking-widest text-sm">
                  {selectedImage.title}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
