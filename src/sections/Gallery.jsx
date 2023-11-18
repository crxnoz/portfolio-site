import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageElement = ({ image, values }) => {
  return (
    <AnimatePresence initial={true}>
      <motion.img
        key={2}
        className={values}
        src={image}
        transition={{
          translateY: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 5,
          },
        }}
      ></motion.img>
    </AnimatePresence>
  );
};

const Gallery = () => {
  const divRef = useRef(null);

  const [websiteList, setWebsiteList] = useState([
    { name: "aoiths.org", url: "design4.png" },
    { name: "modamesite.com", url: "design1.png" },
    { name: "abcdates.com", url: "design2.png" },
    { name: "sample-site1.com", url: "design3.png" },
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (event) => {
    // Prevents page from scrolling
    event.preventDefault();

    // If scrolling UP and index is not greater than the amount of images
    if (event.deltaY > 0) {
      scrollSite("+");
      // If scrolling DOWN and index is not 0
    } else if (event.deltaY < 0) {
      scrollSite("-");
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
  }, [handleScroll]);

  const mapSite = (arr) => {
    return arr.map((site, index) => {
      const classValues = `${
        index === 1 ? "opacity-90 text-9xl" : "opacity-40 text-7xl"
      } tracking-widest transition-opacity`;

      return (
        <motion.li key={index} className={classValues}>
          {site.name}
        </motion.li>
      );
    });
  };

  const scrollSite = (change) => {
    let updatedArray = [];

    if (change === "+") {
      for (let i = 1; i < websiteList.length; i++) {
        updatedArray.push(websiteList[i]);
      }
      updatedArray.push(websiteList[0]);
      setWebsiteList(updatedArray);
    }
    if (change === "-") {
      updatedArray.push(websiteList[websiteList.length - 1]);
      for (let i = 1; i < websiteList.length; i++) {
        updatedArray.push(websiteList[i - 1]);
      }
      setWebsiteList(updatedArray);
    }
  };

  return (
    <div className="w-full flex justify-center mt-[300px]">
      <div className="w-full flex items-center">
        <div className=" w-1/2 h-screen bg-slate-600 overflow-hidden">
          <img
            className="object-cover h-full filter brightness-75"
            src="design1.png"
          />
        </div>
        <div className="flex w-full absolute justify-center items-center h-[800px]">
          <ul
            ref={divRef}
            className="z-10	font-vina w-auto h-[800px] overflow-hidden flex flex-col p-8 gap-32 text-white items-center"
          >
            {mapSite(websiteList)}
          </ul>
        </div>
        <div className="w-1/2 h-screen bg-slate-800 overflow-hidden items-start">
          <ImageElement
            image={websiteList[1].url}
            values={"object-cover h-full filter brightness-75 opacity-50"}
          ></ImageElement>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Gallery;
