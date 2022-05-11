import React from "react";
import classes from "./style/services.module.css";
import Image from "next/image";

function OurService(props) {
  return (
    <div key={props.id} className={classes.oneService}>
      <div className={classes.patternStle}>
        <Image
          src={props.backgroundImage}
          width={170}
          height={170}
        />
      </div>
      <div className={classes.service1Style}>
        <Image src={props.image} width={50} height={50} />
      </div>
      <h4>{props.title}</h4>
    </div>
  );
}

export default OurService;
