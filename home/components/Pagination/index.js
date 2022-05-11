import React from "react";
import classes from "./style/pagination.module.css";

function Pagination() {
  return (
    <div className={classes.pagination}>
      <a >&lt;</a>
      <a >1</a>
      <a >2</a>
      <a >3</a>
      <a >&gt;</a>
    </div>
  );
}

export default Pagination;