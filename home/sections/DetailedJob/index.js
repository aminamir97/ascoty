import React from "react";
import { Second } from "../../components/DetailedJob/secondCol";
import First from "../../components/DetailedJob/firstCol";
import classes from "./style.module.css";

export const DetailedJobSection = () => {
  return (
    <div className={classes.container}>
      <First />
      <Second />
    </div>
  );
};
