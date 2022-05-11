import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./styles.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function OneMember(props) {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [stateOfTitleInput, setStateOfTitleInput] = React.useState(props.title);
  const [stateOfDescInput, setStateOfDescInput] = React.useState(
    props.brief
  );
  const [stateOfNameInput, setStateOfNameInput] = React.useState(
    props.name
  );
  const [stateOfImageInput, setStateOfImageInput] = React.useState( props.avatar);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
        <img className={classes.styleImage} src={props.avatar} />
        <Typography variant="h4" color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {props.brief}
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
        <DialogTitle>Remove {props.name}</DialogTitle>
        <DialogContent>
          <Typography>
            Are You Sure you Want To Remove This Member ?
          </Typography>
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
        <DialogTitle>Edit {props.name}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => props.onEdit(e, props.id)}
            className={classes.form}
          >
             <input
                type="url"
                name="image"
                value={stateOfImageInput}
                onChange={(e) => setStateOfImageInput(e.target.value)}
              />
            <input
              type="text"
              name="name"
              value={stateOfNameInput}
              onChange={(e) => setStateOfNameInput(e.target.value)}
            />
            <input
              type="text"
              name="title"
              value={stateOfTitleInput}
              onChange={(e) => setStateOfTitleInput(e.target.value)}
            />
            <input
              type="text"
              name="brief"
              value={stateOfDescInput}
              onChange={(e) => setStateOfDescInput(e.target.value)}
            />
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

export default OneMember