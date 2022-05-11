import * as React from "react";
import OneProject from "./oneProject";
import classes from "./styles.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Switch from "@mui/material/Switch";

export default function Projects(props) {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
          Add New Project
        </Button>
  
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogContent>
          <form onSubmit={props.onSubmit} className={classes.form}>
            <input type="text" name="title" placeholder="Projects Name" />
            <input type="url" name="image" placeholder="Project Image" />
            <div className={classes.styleSwitch}>
              <p>Featured</p>
              <Switch
                checked={checked}
                onChange={handleChange}
                color="primary"
              />
            </div>
            {checked && (
              <input type="url" name="Fimage" placeholder="Featured Image" />
            )}
            {checked && (
              <input type="text" name="description" placeholder="Description" />
            )}
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
        {props.items && props.items.map((item) => {
          return (
            <OneProject
              key={item._id}
              onEdit={props.onEdit}
              onDelete={props.onDelete}
              id={item._id}
              image={item.image}
              description={item.description}
              title={item.title}
              featuredImage={item.featuredImage}
            />
          );
        })}
      </div>
    </div>
  );
}
