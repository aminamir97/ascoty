import * as React from "react";
import { useState, useEffect } from "react";
import OneBlog from "./OneBlog";
import classes from "./style.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Blog(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.styleAllProject}>
      <center>
        <Button
          onClick={handleClickOpen}
          className={classes.styleButton}
          variant="outlined"
        >
          Add New Blog
        </Button>
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Blog</DialogTitle>
        <DialogContent>
          <form onSubmit={props.onSubmit} className={classes.form}>
            <input type="text" name="title" placeholder="Blog Title" />
            <input type="url" name="image" placeholder="Blog Image" />
            <input type="date" name="date" placeholder="Date of Blog" />
            <input
              type="text"
              name="categoryName"
              placeholder="category name of blog"
            />
            <input
              type="number"
              name="noOfComments"
              placeholder="numbers of comments"
            />
            <div>
              <label htmlFor="isActive">activate </label>
              <input type="checkbox" name="isActive" />
            </div>
            <div className={classes.actions}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} type="submit">
                Add
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <div className={classes.styleStack}>
        {props.blogData &&
          props.blogData.map((item) => {
            return (
              <OneBlog
                key={item._id}
                onEdit={props.onEdit}
                onDelete={props.onDelete}
                id={item._id}
                image={item.image}
                date={item.date}
                title={item.title}
                categoryName={item.categoryName}
                noOfComments={item.noOfComments}
                isActive={item.isActive}
              />
            );
          })}
      </div>
    </div>
  );
}
