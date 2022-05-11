import React, { useRef } from "react";
import { Box, TextField, Button, FormGroup, Alert } from "@mui/material";

export const EditRow = (props) => {
  const form = useRef();
  const [validate, setValidate] = React.useState(true);
  const [currentItem, setItem] = React.useState(props.data);

  const HandelChange = (e) => {
    setItem({ ...currentItem, [e.target.name]: e.target.value });
  };
  function update() {
    //editFx
    // event.preventDefault();
    const data = new FormData(form.current);
    const item = {
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    if (
      data.get("email") !== "" &&
      data.get("firstName") !== "" &&
      data.get("lastName") !== "" &&
      data.get("password") !== ""
    ) {
      setValidate(true);
      props.editFx(props.data._id, item);
      props.closeFx();

      //add to api
    } else {
      setValidate(false);
    }
  }
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <Box
        ref={form}
        component="form"
        // onSubmit={update}
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          margin: "50px",
        }}
      >
        <TextField
          sx={{
            margin: "5px",
          }}
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          onChange={HandelChange}
          value={currentItem.firstName}
          autoFocus
        />
        <TextField
          sx={{
            margin: "5px",
          }}
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
          onChange={HandelChange}
          value={currentItem.lastName}
        />

        <TextField
          sx={{
            margin: "5px",
          }}
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="family-name"
          onChange={HandelChange}
          value={currentItem.email}
        />
        <TextField
          sx={{
            margin: "5px",
          }}
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="family-name"
          onChange={HandelChange}
          value={currentItem.password} //{props.data.password}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => props.closeFx()}
          sx={{
            width: "200px",
            justifySelf: "center",
          }}
          color="error"
          fullWidth
          variant="contained"
        >
          CLOSE
        </Button>
        <Button
          sx={{
            marginLeft: "20px",
            width: "200px",
            justifySelf: "center",
          }}
          // type="submit"
          onClick={update}
          fullWidth
          variant="contained"
        >
          Edit User
        </Button>
      </Box>
      <Box>
        {!validate && (
          <Alert sx={{ margin: "20px" }} severity="error">
            All fields are needed to be filled to submit this form.
          </Alert>
        )}
      </Box>
    </Box>
  );
};
