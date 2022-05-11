import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./style.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function OneBlog(props) {
  const form = {
    title: props.title,
    image: props.image,
    date: props.date,
    categoryName: props.categoryName,
    noOfComments: props.noOfComments,
    isActive: props.isActive,
  };
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [stateOfTitleInput, setStateOfTitleInput] = useState(props.title);
  const [stateOfDateInput, setStateOfDateInput] = useState(props.date);
  const [stateOfNoOfComments, setStateOfNoOfComments] = useState(
    props.noOfComments
  );
  const [stateOfImageInput, setStateOfImageInput] = useState(props.image);
  const [stateOfCategoryInput, setStateOfCategoryInput] = useState(
    props.categoryName
  );
  const [stateOfIsActiveInput, setStateOfIsActiveInput] = useState(
    props.isActive
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Card
      className={classes.styleOneProject}
      key={props.id}
      sx={{ maxWidth: 300 }}
    >
      <CardContent>
        <img src={props.image} />
        <Typography variant="h4" color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <br />

        <Typography variant="h7" color="text.secondary" gutterBottom>
          {props.date}
        </Typography>
        <br />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Category type: {props.categoryName}
        </Typography>
        <br />

        <Typography variant="h5" color="text.secondary" gutterBottom>
          Numbers of comments: {props.noOfComments}
        </Typography>
        <br />
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Is Active: {props.isActive ? "Yes" : "No"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClickOpen} size="small">
          Edit
        </Button>
        <Button onClick={handleClickOpenDelete} size="small">
          Delete
        </Button>
      </CardActions>
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle>Edit {props.title}</DialogTitle>
        <DialogContent>
          <Typography>Are You Sure you Want To Delete this BLOG ?</Typography>
          <div className={classes.actionDelete}>
            <Button onClick={handleCloseDelete}>Cancel</Button>
            <Button
              onClick={() => {
                props.onDelete(props.id);
                handleCloseDelete();
              }}
              type="submit"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit {props.title}</DialogTitle>
        <Typography>Are You Sure you Want To Delete this BLOG ?</Typography>

        <DialogContent>
          <form
            onSubmit={(e) => props.onEdit(e, props.id)}
            className={classes.form}
          >
            <input
              type="text"
              name="title"
              value={stateOfTitleInput}
              onChange={(e) => setStateOfTitleInput(e.target.value)}
            />
            <input
              type="url"
              name="image"
              value={stateOfImageInput}
              onChange={(e) => setStateOfImageInput(e.target.value)}
            />

            <input
              type="date"
              name="date"
              value={stateOfDateInput}
              onChange={(e) => setStateOfDateInput(e.target.value)}
            />
            <input
              type="text"
              name="categoryName"
              value={stateOfCategoryInput}
              onChange={(e) => setStateOfCategoryInput(e.target.value)}
            />
            <input
              type="number"
              name="noOfComments"
              value={stateOfNoOfComments}
              onChange={(e) => setStateOfNoOfComments(e.target.value)}
            />
            <div>
              <label htmlFor="isActive">activate </label>
              <input
                type="checkbox"
                name="isActive"
                checked={stateOfIsActiveInput}
                onChange={(e) => setStateOfIsActiveInput(e.target.checked)}
              />
            </div>

            <div className={classes.actions}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} type="submit">
                Edit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default OneBlog;
