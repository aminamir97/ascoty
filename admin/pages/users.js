import React, { useEffect, useState } from "react";
import { UserCardItem } from "../components/usersModules/userObject";
import UsersTable from "../components/usersModules/userObject/table";
import Button from "@mui/material/Button";
import classes from "../styles/usersPage.module.css";
import NewUserForm from "../components/usersModules/addNewUserForm.js";
import Image from "next/image";
import { Modal, Box, Alert } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  p: 4,
};

export default function Users() {
  const [addingNew, setAddingNew] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [0]);

  async function getAllUsers() {
    const req = await fetch("/api/user", {
      method: "GET",
    });
    const res = await req.json();
    console.log("akl " + res);

    setList(res.data);
  }

  function setAddingNewFx() {
    const i = addingNew;
    setAddingNew(!i);
  }

  async function deleteUser(id) {
    const req = await fetch("/api/user/" + id, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
    });
    const result = await req.json();
    getAllUsers();
  }

  async function updateUser(id, item) {
    const req = await fetch("/api/user/" + id, {
      method: "PUT",
      body: JSON.stringify({
        firstName: item.firstName,
        lastName: item.lastName,
        password: item.password,
        email: item.email,
      }),
    });
    const result = await req.json();
    getAllUsers();
  }
  return (
    <div>
      <div className={classes.addNewContainer}>
        <p className={classes.addMoreText}>Add new user</p>
        <Button
          onClick={() => setAddingNewFx()}
          variant="contained"
          color={addingNew ? "warning" : "success"}
        >
          {addingNew ? "Close form" : "Add more"}
        </Button>
      </div>
      <UsersTable
        editFx={updateUser}
        getAllFx={getAllUsers}
        deleteFx={deleteUser}
        items={list}
      />
      <Modal
        open={addingNew}
        onClose={() => setAddingNew(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Alert>
            <NewUserForm getAllFx={getAllUsers} closeHandler={setAddingNewFx} />
          </Alert>
        </Box>
      </Modal>
    </div>
  );
}
// export async function getInitialProps(ctx) {
//   console.log("rasdasdasdasdes");
//   let re;
//   try {
//     const req = await fetch("/api/user", {
//       method: "GET",
//     });
//     const res = await req.json();
//     console.log(res);

//     return {
//       props: {
//         usersList: res.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         usersList: [],
//       },
//     };
//   }
// }
