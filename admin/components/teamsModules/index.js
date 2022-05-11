import React from "react";
import classes from "./styles.module.css";
import Button from "@mui/material/Button";
import OneMember from "./oneMember";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Teams(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.styleAllTeam}>
      <center>
        <Button
          onClick={handleClickOpen}
          className={classes.styleButton}
          variant="outlined"
        >
          Add New Member
        </Button>
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogContent>
          <form onSubmit={props.onSubmit} className={classes.form}>
            <input type="url" name="image" placeholder="Avatar" />
            <input type="text" name="name" placeholder="Name of employee (first name & last name)" />
            <input type="text" name="title" placeholder="Title of employee" />
            <input
              type="text"
              name="description"
              placeholder="Brief on the employee"
            />
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
            <OneMember
              key={item._id}
              onEdit={props.onEdit}
              onDelete={props.onDelete}
              id={item._id}
              avatar={item.avatar}
              brief={item.brief}
              title={item.title}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}
