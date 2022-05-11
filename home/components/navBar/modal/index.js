import React from "react";
import classes from "./style/modal.module.css";
import Image from "next/image";
function ModalContainer({ show,onClose }) {


    if(!show) return null

  return (
    <div className={classes.modal}>
      <div className={classes.container}>
        <img src="https://static.ascot.ws/assets/Icons/closes.svg" className={classes.close} onClick={onClose} />
        <h2>ENTER YOUR KEYWORDS</h2>
        <form>
          <input type="text" />
          <div className={classes.subContainer}>
            <div className={classes.cercil}>
              <img src="https://static.ascot.ws/assets/Icons/whiteArr.svg" />
            </div>
            <p>Subscribe</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalContainer;
