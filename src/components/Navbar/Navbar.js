import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import useFetch from "../../constants/useFetch";


const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const API_URL_HEADER =
"https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?select=fields&content_type=headernav";
const API_URL_NAVBAR =
"https://cdn.contentful.com/spaces/xwxqqpx0he6y/entries/?select=fields&content_type=navbar";

const { data, loading, error } = useFetch(API_URL_HEADER);
const {data: navbar, loading: navbarloading, error: naverror} = useFetch(API_URL_NAVBAR)

const navbarLinks = [ 
  {url: "home", title: "Home"},
  {url: "random", title: "Random"},
  {url: "team", title: "Team"},
    ]

let headerurl = null;
let navbaritem = null;
let navbaritems = null;

if (data && navbar) {
    console.log(navbar)
    console.log(data);
    const headertitle = data["items"][0]["fields"]["headertitle"];
    headerurl = data["includes"]["Asset"][0]["fields"]["file"]["url"];

    navbaritems = navbar.includes.Entry.map((item, index) => {

     return(
      <li className="navbar__item" key={index}>
              {/* <NavLink className="navbar__link" activeClass="active" to={`${item.fields.url}`} spy={true} smooth={true} offset={50} duration= {1200} onClick={closeMenu}  > {item.fields.title}  </NavLink> */}
              {/* <Link className="navbar__link" activeClass="active" to={`${item.fields.url}`} onClick={closeMenu}  > {item.fields.title}  </Link> */}
              <a className="navbar__link" href={item.fields.url}>
                {item.fields.title}
              </a>
            </li>
     )
    })
  
  }




  return (
    <div className="navbar__div">
    <nav className="navbar">
      <span className="navbar__logo"><img height={150} src={headerurl}/></span>
      <div className="navbar__socials">
        <a className="navbar__socials_a" href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
         <BsTwitter className="navbar__socials_twitter" href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer"/>
        </a>
        <a className="navbar__socials_a_discord" href="http://www.discord.gg"  title="Discord" target="_blank" rel="noopener noreferrer">
         <FaDiscord className="navbar__socials_discord"  title="Discord" target="_blank" rel="noopener noreferrer"/>
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
        {navbaritems}
    
      </ul>
    </nav>
    </div>
  );    
};

export default Navbar;
