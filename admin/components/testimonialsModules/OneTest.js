import React,{useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "../../styles/usersPage.module.css";
import { Button, Modal, Alert } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import axios from '../../Axios/index'

export default function UsersTable({data,handleDelete,setChosenTest,setOpenModal}) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openActive, setOpenActive] = useState(false);



  const [chosenId, setChosenId] = useState(null);
  const [activation, setActivation] = useState(null);









  return (
    <TableContainer className={classes.tableStyle} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="big" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.thead}>Review</TableCell>
            <TableCell className={classes.thead} align="right">
              reviewer
            </TableCell>
            <TableCell className={classes.thead} align="right">
              reviewer title
            </TableCell>
            <TableCell className={classes.thead} align="right">
              active
            </TableCell>
            <TableCell className={classes.thead} align="right">
              ACTIONs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.length &&(
              data.map(test =>{

                return(
                  <TableRow key={test._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {test.Review}
                  </TableCell>
                  <TableCell align="right">{test.reviewer}</TableCell>
                  <TableCell align="right">{test.reviewerTitle}</TableCell>
                  <TableCell align="right">

                    {
                      test.isActive ? (
                        <Button
                      variant="contained"
                      color="success"
                    >
                      Active
                    </Button>
                      ):(
                        <Button
                      variant="contained"
                      color="error"
                    >
                      inactive
                    </Button>
                      )
                    }
                  
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={()=>{
                        setOpenDelete(true)
                        setChosenId(test._id)
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{margin:"0px 10px"}}
                      variant="contained"
                      color="primary"
                      onClick={()=>{
                        setChosenId(test._id);
                        setChosenTest(test);
                        setOpenModal(true);

                      }}
                    >
                      edit
                    </Button>
                  </TableCell>
                </TableRow>
                )
              })
            )
          }

         
        </TableBody>
      </Table>

      <Dialog open={openDelete} onClose={()=> setOpenDelete(false)}>
        <DialogTitle>delete {""}</DialogTitle>
        <DialogContent>
          <Typography>Are You Sure you Want To Delete this testimonials ?</Typography>
            <Button onClick={()=> setOpenDelete(false)}>Cancel</Button>
            <Button
              onClick={(e) => {
                handleDelete(e,chosenId)
                setOpenDelete(false)
              }}
              type="submit"
            >
              Delete
            </Button>
        </DialogContent>
      </Dialog>




    </TableContainer>
  );
}
