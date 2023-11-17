import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
const TextElement = ({ children, values, left }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const dir = left ? "translateX(-500px)" : "translateX(500px)";

  return (
    <div ref={ref}>
      <motion.div
        className={values}
        style={{
          transform: isInView ? "none" : dir,
          opacity: isInView ? 1 : 0,
          transition: "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const About = () => {
  const [heartClass, setHeartClass] = useState("text-red-500 font-tourney");

  // ! Switch to use framer motion
  useEffect(() => {
    setTimeout(() => {
      if (heartClass === "text-red-500 font-tourney") {
        setHeartClass("text-red-700 font-tourney");
      } else if (heartClass === "text-red-700 font-tourney") {
        setHeartClass("text-red-500 font-tourney");
      }
    }, 500);
  }, [heartClass]);

  return (
    <div className="mt-[300px] flex flex-col">
      <div className="flex flex-col mr-24">
        <TextElement
          values="font-tourney text-8xl w-full text-center transition-transform"
          left={false}
        >
          based in the <span className={heartClass}>vibrant heart</span> of
        </TextElement>
        <TextElement
          values="font-sMono text-9xl w-full text-center font-bold mt-[-40px] transition-transform"
          left={true}
        >
          N<span className="text-4xl">ew</span> Y
          <span className="text-4xl">ork</span> C
          <span className="text-4xl">ity</span>
        </TextElement>
        <TextElement
          values="font-sMono w-full text-5xl mt-8 pl-8 text-center"
          left={true}
        >
          I am an <span className="font-tourney text-6xl">18-year-old</span>{" "}
          that&apos;s obsesses with
        </TextElement>
        <TextElement
          values="font-sMono w-full text-5xl mt-8 pl-8 text-center"
          left={true}
        >
          the world of{" "}
          <span className="font-tourney text-6xl">Full Stack Development</span>{" "}
          and <span className="font-tourney text-6xl">UI Design</span>
        </TextElement>
        <TextElement
          values="font-sMono w-full text-5xl mt-20 text-center"
          left={true}
        >
          self-taught and driven by an immense interest in
        </TextElement>
        <TextElement
          values="font-tourney text-6xl w-full mt-8 text-center"
          left={true}
        >
          React and Node.js
        </TextElement>
        <TextElement
          values="font-sMono w-full text-5xl mt-20 text-center"
          left={true}
        >
          this portfolio represents not only a showcase of my skills
        </TextElement>
        <TextElement
          values="font-sMono w-full text-5xl mt-8 text-center"
          left={true}
        >
          but also a way to{" "}
          <span className="font-tourney text-6xl">
            track my growth over the years.
          </span>
        </TextElement>
        <TextElement
          values="font-sMono w-full text-5xl mt-20 pl-8 text-center"
          left={true}
        >
          don&apos;t be shy to ask me any questions!
        </TextElement>
      </div>
    </div>
  );
};

export default About;
