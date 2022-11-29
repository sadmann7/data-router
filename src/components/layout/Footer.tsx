import React from "react";
import { Link } from "react-router-dom";

const links = [
  { lable: "FAQ", uri: "/" },
  { lable: "Help Center", uri: "/" },
  { lable: "Account", uri: "/" },
  { lable: "Media Center", uri: "/" },
  { lable: "Investor Relations", uri: "/" },
  { lable: "Jobs", uri: "/" },
  { lable: "Ways to Watch", uri: "/" },
  { lable: "Terms of Use", uri: "/" },
  { lable: "Privacy", uri: "/" },
  { lable: "Cookie Preferences", uri: "/" },
  { lable: "Corporate Information", uri: "/" },
  { lable: "Contact Us", uri: "/" },
  { lable: "Speed Test", uri: "/" },
  { lable: "Legal Notices", uri: "/" },
  { lable: "Only on Netflix", uri: "/" },
];

const Footer = () => {
  return (
    <footer
      aria-label="footer"
      className="bg-black text-[#737373] border-t-8 border-t-[#222222]"
    >
      <div className="w-[75vw] max-w-screen-lg mx-auto py-10">
        <p className="text-sm md:text-base font-medium">
          Questions? Contact us.
        </p>
        <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {links.map((link, i) => (
            <Link to={link.uri} key={i} className="text-xs md:text-sm">
              {link.lable}
            </Link>
          ))}
        </div>
        <Link to="/" className="text-xs md:text-sm">
          Netflix Bangladesh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
