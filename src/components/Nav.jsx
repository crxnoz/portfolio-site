import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className="flex">
      <ul className="flex gap-8 w-screen justify-start items-center text-4xl ml-16">
        <a
          href="https://www.instagram.com/luisscvnz/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="opacity-80 hover:opacity-100"
          />
        </a>
        <a href="https://github.com/crxnoz" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="opacity-80 hover:opacity-100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-carre%C3%B1o-b4017b245/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="opacity-80 hover:opacity-100"
          />
        </a>
      </ul>
      <ul className="flex gap-4 w-screen justify-end items-center text-2xl">
        <li className="opacity-80 hover:opacity-100">
          <a>about</a>
        </li>
        <li className="opacity-80 hover:opacity-100">
          <a>gallery</a>
        </li>
        <li className="opacity-80 hover:opacity-100">
          <a>contact</a>
        </li>
        <div className="border-b w-24 h-0"></div>
      </ul>
    </div>
  );
};

export default Nav;
