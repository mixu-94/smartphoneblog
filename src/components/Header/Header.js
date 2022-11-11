// import React from "react";
// import "./Header.css";
// import useFetch from "../../constants/useFetch";

// const Header = () => {
//   const API_URL_HEADER =
//     "https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?select=fields.headertitle,fields.headerlogo&content_type=header";

//   const { data, loading, error } = useFetch(API_URL_HEADER);

//   let logo = null;
//   let title = null;

//   if (data) {
//     console.log(data);
//     const headertitle = data["items"][0]["fields"]["headertitle"];
//     const headerurl = data["includes"]["Asset"][0]["fields"]["file"]["url"];
//     console.log(headertitle);
//     console.log(headerurl);
//     // const headerimage = data.includes.Assets[0].fields.file.url
//     // console.log(headerimage)

//     // headertitle.map((item) => {
//     //   console.log(item)
//     //   title = item.fields.headertitle
//     //   logo = item.fields.headerlogo.sys.id
//     //   console.log(logo)

//     return (
//       <div className="header">
//         <img src={headerurl} alt="test" />
//         <div className="header-title">{headertitle}</div>
//       </div>
//     );
//   }
// };

// export default Header;

import React, { useState } from "react";
import "./Header.css";
import { FiMenu, FiX, FiTwitter } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="navbar__div">
      <nav className="navbar">
        <span className="navbar__logo">
          <NavLink
            to={"/"}
            spy={true}
            smooth={true}
            offset={30}
            duration={1200}
            onClick={closeMenu}
          >
            
            <img height={150} src="{}" />
          </NavLink>
        </span>
        <div className="navbar__socials">
          <a
            className="navbar__socials_a"
            href="https://twitter.com/"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter
              className="navbar__socials_twitter"
              href="https://twitter.com/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a
            className="navbar__socials_a_discord"
            href="http://www.discord.gg"
            title="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord
              className="navbar__socials_discord"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>

        {menuClicked ? (
          <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
        ) : (
          <FiMenu
            size={25}
            className={"navbar__menu"}
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={
            menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
          }
        >
          {navbarLinks.map((item, index) => {
            return (
              <li className="navbar__item" key={index}>
                <Link
                  className="navbar__link"
                  activeClass="active"
                  to={`${item.url}`}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1200}
                  onClick={closeMenu}
                >
                  {" "}
                  {item.title}{" "}
                </Link>
                {/* <a className="navbar__link" href={item.url}>
                {item.title}
              </a> */}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
