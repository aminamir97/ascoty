import React from "react";
import classes from "./style/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.left}>
        <img src="https://static.ascot.ws/assets/Icons/White Logo.svg" />

        <div className={classes.paragraph}>
          <p>Amman, Jubaiha, Nouh Complex</p>
          <p>Info@ascot.ws</p>
          <p>+96265334707</p>
        </div>

        <div className={classes.icons}>
          <img src="https://static.ascot.ws/assets/Icons/Facebok.svg" />
          <img src="https://static.ascot.ws/assets/Icons/LinkedIn.svg" />
          <img src="https://static.ascot.ws/assets/Icons/tWITTER.svg" />
          <img src="https://static.ascot.ws/assets/Icons/Youtube.svg" />
          <img src="https://static.ascot.ws/assets/Icons/Instagram.svg" />
          <img src="https://static.ascot.ws/assets/Icons/icon2.svg" />
        </div>
      </div>

      <div className={classes.center}>
        <h2>Useful links</h2>
        <ul>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Testimonials</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Terms & Conditons</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.right}>
        <h2>Subscribe Newsletter</h2>

        <div className={classes.inputcontainer}>
          <p>Subscribe now to get our updates</p>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className={classes.subContainer}>
          <div className={classes.cercil}>
            <img src="https://static.ascot.ws/assets/Icons/CTA Arrow.svg" />
          </div>
          <p>Subscribe</p>
        </div>
      </div>

      <div className={classes.iconsMob}>
      <img src="https://static.ascot.ws/assets/Icons/Facebok.svg" />
          <img src="https://static.ascot.ws/assets/Icons/LinkedIn.svg" />
          <img src="https://static.ascot.ws/assets/Icons/tWITTER.svg" />
          <img src="https://static.ascot.ws/assets/Icons/Youtube.svg" />
          <img src="https://static.ascot.ws/assets/Icons/Instagram.svg" />
          <img src="https://static.ascot.ws/assets/Icons/icon2.svg" />
      </div>
    </footer>
  );
}

export default Footer;
