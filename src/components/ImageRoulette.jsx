import { useState, useRef, useEffect } from "react";

const ImageRoulette = () => {
  // Load the images only works for 3..
  const [images, setImages] = useState([
    { src: "/design4.png", active: false },
    { src: "/design1.png", active: true },
    { src: "/design2.png", active: false },
    { src: "/design3.png", active: false },
  ]);

  let [translate, setTranslate] = useState(0);
  // * useRef doesn't cause re-renders
  const divRef = useRef(null);
  let isScrolling = useRef(false);

  // * Function to set new main image
  const ImageActive = (currentIndex) => {
    // ! Make sure the new index fits within limits
    if (currentIndex >= 0 && currentIndex < images.length) {
      const updatedImages = images.map((image, index) => ({
        ...image, // Keep the current values of image
        // Check and set the value of active, 'index' is the same as 'currentIndex'
        // * If not then active is false, if it is then active is true
        active: index === currentIndex,
      }));
      // Update images
      setImages(updatedImages);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (event) => {
    // Prevents page from scrolling
    event.preventDefault();

    // isScrolling.current is false by default
    // * if isScrolling.current is true
    if (isScrolling.current) return;

    // Set isScrolling.current to true, doesn't re-render
    isScrolling.current = true;
    // Wait 10ms to set isScrolling.current to false
    setTimeout(() => (isScrolling.current = false), 10);

    // Get the current active image
    const currentIndex = images.findIndex((image) => image.active);

    // If scrolling UP and index is not greater than the amount of images
    if (event.deltaY > 0 && currentIndex < images.length - 1) {
      ImageActive(currentIndex + 1);
      setTranslate(translate - 300);
      // If scrolling DOWN and index is not 0
    } else if (event.deltaY < 0 && currentIndex > 0) {
      ImageActive(currentIndex - 1);
      setTranslate(translate + 300);
    }
  };

  useEffect(() => {
    // div is the element that divRef is attached to
    const div = divRef.current;

    // Add 'wheel' eventListener to the div
    if (div) {
      div.addEventListener("wheel", handleScroll);
    }

    // Clean up and remove eventListener, good practice
    // ! If not removed could potentially duplicate
    return () => {
      if (div) {
        div.removeEventListener("wheel", handleScroll);
      }
    };
  }, [images, handleScroll]); // Renders when images and handleScroll change

  // Look for the current index and base how much the roulette should be scrolling

  const renderedImages = images.map((image, index) => (
    <div
      key={index}
      className={
        image.active
          ? "transition-transform bg-transparent opacity-100 will-change-transform hover:opacity-90 active:opacity-80 border-2"
          : // Scale down image if not the active one
            "transition-transform scale-75 bg-translate opacity-70 will-change-transform"
      }
    >
      <img
        className="object-cover h-[300px] w-[540px]"
        src={image.src}
        alt={`Design ${index + 1}`}
      />
    </div>
  ));

  const classString = `mt-[-150px] transition-transform relative translate-y-[${translate}px] will-change-transform`;

  const imgIndicators = images.map((image, index) => (
    <li
      key={index}
      className={
        // If the current index matches the active index then give the dot a brighter color
        images.findIndex((image) => image.active) === index
          ? "w-2 h-2 mb-4 bg-slate-200 rounded-full"
          : "w-2 h-2 mb-4 bg-slate-600 rounded-full"
      }
    ></li>
  ));

  return (
    <>
      <div className="mr-4">
        <ul>{imgIndicators}</ul>
      </div>
      <div ref={divRef} className="h-[600px] overflow-hidden flex flex-col">
        {/* The div that scrolls up and down */}
        <div className={classString}>{renderedImages}</div>
      </div>
    </>
  );
};

export default ImageRoulette;
