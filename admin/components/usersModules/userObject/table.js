import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "../../../styles/usersPage.module.css";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  Box,
  Button,
  Modal,
  Alert,
  CloseIcon,
  TableFooter,
} from "@mui/material";
import { EditRow } from "../editUserRow";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  p: 4,
};

export default function UsersTable(props) {
  const [sureDel, setSureDel] = React.useState({ val: false, id: null });
  const [editing, setEditing] = React.useState({ val: false, dataRow: null });
  let obj;

  function editingFx(item) {
    if (editing.val) {
      setEditing({ val: false, dataRow: null });
    } else {
      setEditing({ val: true, dataRow: item });
    }
  }
  function openSureDialog(id) {
    console.log("iddd  " + id);

    setSureDel({ val: true, id: id });
  }
  function closeSureDialog(id) {
    setSureDel({ val: false, id: null });
    console.log(id);
  }

  function dialogOpen(id) {
    props.deleteFx(id);
  }
  // function dialogClose() {
  //   setSureDel(false);
  // }

  return (
    <TableContainer className={classes.tableStyle} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="big" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.thead}>First name</TableCell>
            <TableCell className={classes.thead} align="right">
              Last name
            </TableCell>
            <TableCell className={classes.thead} align="right">
              Email
            </TableCell>
            <TableCell className={classes.thead} align="right">
              Password
            </TableCell>
            <TableCell className={classes.thead} align="right">
              ACTIONs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.length === 0 && (
            <TableRow>
              <TableCell>
                <h1>No users found</h1>
              </TableCell>
            </TableRow>
          )}
          {props.items.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => openSureDialog(row._id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
                <Button
                  sx={{ marginLeft: "20px" }}
                  onClick={() => editingFx(row)}
                  variant="contained"
                  color="warning"
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={sureDel.val} onClose={() => setSureDel(false)}>
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "700",
          }}
          fullWidth
        >
          Edit Warning{props.title}
        </DialogTitle>

        <DialogContent>
          <Typography>Are You Sure you Want To Delete this User ?</Typography>
          <Box sx={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
            <Button
              sx={{
                marginRight: "20px",
                justifySelf: "center",
              }}
              color="success"
              variant="contained"
              onClick={() => closeSureDialog()}
            >
              Cancel
            </Button>
            <Button
              sx={{
                justifySelf: "center",
              }}
              color="error"
              variant="contained"
              onClick={() => {
                props.deleteFx(sureDel.id);
                closeSureDialog();
              }}
            >
              Delete
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      {/* <Modal
        open={sureDel}
        onClose={() => setSureDel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>are u sure u want to delete ?</h2>
        </Box>
      </Modal> */}
      <Modal
        open={editing.val}
        onClose={() => setEditing({ val: false, dataRow: null })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Alert>
            <EditRow
              editFx={props.editFx}
              closeFx={() => setEditing({ val: false, dataRow: null })}
              data={editing.dataRow}
            />
          </Alert>
        </Box>
      </Modal>
    </TableContainer>
  );
}
