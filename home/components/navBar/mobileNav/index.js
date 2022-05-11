import React from "react";
import classes from "./style/mobileNav.module.css";
import Link from "next/link";
import { useRef, useState } from "react";

function MobileNav() {
  const divEL = useRef(null);
  const ulEL = useRef(null);
  const ulEL2 = useRef(null);

  const [isopen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (divEL.current.style.display === "block") {
      divEL.current.style.display = "none";
    } else {
      divEL.current.style.display = "block";
    }

    setIsOpen(!isopen);
  };

  const handleOpenUl = () => {
    if (ulEL.current.style.display === "block") {
      ulEL.current.style.display = "none";
    } else {
      ulEL.current.style.display = "block";
    }
  };

  const handleOpenUl2 = () => {
    if (ulEL2.current.style.display === "block") {
      ulEL2.current.style.display = "none";
    } else {
      ulEL2.current.style.display = "block";
    }
  };

  return (
    <div className={classes.mobileheader}>
      {isopen ? (
        <img
          src="https://static.ascot.ws/assets/Icons/closes.svg"
          onClick={handleClick}
        />
      ) : (
        <img
          src="https://static.ascot.ws/assets/Icons/hamburger.svg"
          onClick={handleClick}
        />
      )}

      <div className={classes.navlinks} ref={divEL}>
        <div className={classes.search}>
          <input type="text" placeholder="SEARCH" />
          <img src="https://static.ascot.ws/assets/Icons/Search.svg" />
        </div>

        <ul className={classes.menu}>
          <li onClick={handleClick}>
            <Link href="/">
              <a>HOME PAGE</a>
            </Link>

          </li>
          <li onClick={handleClick}>
            <Link href="/about">
              <label htmlFor="btn1" className={classes.first}>
                <a>ABOUT US</a>
              </label>
            </Link>
            <div className={classes.arrowDiv} onClick={handleOpenUl}>
              <img
                src="https://static.ascot.ws/assets/Icons/Vector.svg"
                className={`${classes.left}`}
              />
            </div>

            <ul ref={ulEL}>
              <li onClick={handleClick}>
                <Link href="/who-we-are">
                  <a>WHO WE ARE</a>
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link href="/about">
                  <a>WHAT WE DO</a>
                </Link>

              </li>
              <li onClick={handleClick}>
                <Link href="/about">

                  <a>Testimonials</a>
                </Link>

              </li>
            </ul>
          </li>
          <li onClick={handleClick}>
            <Link href="/products">
              <a>PRODUCTS</a>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/services">
              <a>SERVICES</a>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/blog">
              <label htmlFor="btn2" className={classes.first}>
                <a>BLOG</a>
              </label>
            </Link>
            <div className={classes.arrowDiv} onClick={handleOpenUl2}>
              <img
                src="https://static.ascot.ws/assets/Icons/Vector.svg"
                className={`${classes.left}`}
              />
            </div>

            <ul ref={ulEL2}>
              <li onClick={handleClick}>
                <a>blog</a>
              </li>
              <li onClick={handleClick}>
                <a>e-book</a>
              </li>
            </ul>
          </li>
        </ul>

        <p onClick={handleClick}>Request A Quote</p>
      </div>

      <div className={classes.logo}>
        <Link href="/">
          <a>
            {" "}
            <img src="https://static.ascot.ws/assets/Icons/logo_colored.svg" />
          </a>
        </Link>
      </div>

      <div className={classes.arabic}>
        <a>عربي</a>
      </div>
    </div>
  );
}

export default MobileNav;
