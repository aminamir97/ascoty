import React, { useState, useEffect } from "react";
import styles from "./style/nav.module.css";
import Image from "next/image";
import Link from "next/link";
import ModalContainer from "../modal";

function DesktopNav() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>{/* <Image src={hamburger} /> */}</div>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src="https://static.ascot.ws/assets/Icons/logo_colored.svg"
              width={200}
              height={200}
            />
          </a>
        </Link>{" "}
      </div>

      <div className={styles.navContainer}>
        <nav>
          <li>
            <Link href="/">
              <a>HOMEPAGE</a>
            </Link>
          </li>

          <li>
            <div className={styles.dropdown}>
              <Link href="/about">
                <a className={styles.dropdown}>ABOUT US</a>
              </Link>
              <div style={{ display: "inline", margin: "5px" }}>
                <Image
                  src="https://static.ascot.ws/assets/Icons/Vector.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className={styles.dropdowncontent}>
                <Link href="/who-we-are">
                  <a>Who We Are</a>
                </Link>
                <Link href="/about">
                  <a>What We Do</a>
                </Link>
                <Link href="/about">
                  <a>Testimonials</a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="#">
              <a>PRODUCTS</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>SERVICES</a>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <div className={styles.dropdown}>
              <Link href="/blog">
                <a className={styles.dropdown}>BLOG</a>
              </Link>
              <div style={{ display: "inline", margin: "5px" }}>
                <Image
                  src="https://static.ascot.ws/assets/Icons/Vector.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className={styles.dropdowncontent}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
                <Link href="/blog">
                  <a>e-book</a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/**">
              <a>عربي</a>
            </Link>
          </li>
        </nav>

        <div className={styles.search} onClick={() => setShow(true)}>
          <Image
            src="https://static.ascot.ws/assets/Icons/Search.svg"
            width={25}
            height={25}
          />
        </div>

        <div className={styles.request}>
          <Link href="/Request-a-Quote ">
            <h2>Request A Quote</h2>
          </Link>
        </div>
      </div>

      <ModalContainer onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default DesktopNav;
