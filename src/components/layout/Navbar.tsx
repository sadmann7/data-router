import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = [{ label: "Home", url: "/" }];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeBg = () => {
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  }, []);

  return (
    <section
      aria-label="navbar"
      className={`${
        isScrolled ? "shadow-lg" : ""
      } z-40 fixed top-0 left-0 w-full`}
    >
      <div className="w-[89vw] max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={() => setIsMobile(false)}>
          <img
            src="/images/netflix-logo.svg"
            alt="logo"
            width={125}
            height={20}
            loading="lazy"
          />
        </Link>
        <Link to="/login" aria-label="register">
          <button className="bg-red-600 px-3 py-1 rounded-sm text-white text-sm md:text-base">
            Sign In
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
