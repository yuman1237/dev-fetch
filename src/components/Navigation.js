import React, { useState } from "react";
import { CgBmw } from "react-icons/cg";
import { AiFillNotification } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
const Navigation = (props) => {
  const [showMenu, setshowMenu] = useState(false);
  const toggle = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={() => props.openMenu()}
        ></div>
        <a href="/" className="headerContainer__logo">
          <CgBmw size="3.125rem" color="black" />
        </a>
        <div className="headerContainer__searchBox">
          <form action="">
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>
        <div className="headerContainer__right">
          <button>Write a post</button>
          <i className="hidden-search">
            <FiSearch />
          </i>
          <i>
            <AiFillNotification size="1.5rem" color="black" />
          </i>
          <i>
            <RiMessage2Fill size="1.5rem" color="black" />
          </i>
          <span onClick={toggle}>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </span>
        </div>
        <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
          <ul>
            <li>
              <a href="/porfile">
                <div className="u-name">DemoName</div>
                <small className="u-id">@XXXXXXXXX</small>
              </a>
            </li>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li>
              <a href="/account">My Account</a>
            </li>
            <li>
              <a href="/account">Signout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
