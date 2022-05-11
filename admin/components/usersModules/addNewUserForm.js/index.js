import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Modal, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  p: 4,
};

export default function NewUserForm(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseFail = () => setFail(false);
  function handleClose() {
    props.closeHandler();

    setOpen(false);
    props.getAllFx();
  }
  const [validate, setValidate] = React.useState(true);
  const [fail, setFail] = React.useState(false);

  const addNewUserApi = async (data) => {
    const req = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        confirmPassword: data.get("confirmpassword"),
      }),
    });
    const result = await req.json();

    if (result.res) {
      setValidate(true);
      handleOpen();
    } else {
      setFail(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //check form this.props.description.name.trim() == ""
    if (
      data.get("email") !== "" &&
      data.get("firstName") !== "" &&
      data.get("lastName") !== "" &&
      data.get("password") !== "" &&
      data.get("confirmpassword") !== "" &&
      data.get("password") === data.get("confirmpassword")
    ) {
      //add to api
      addNewUserApi(data);
    } else {
      setValidate(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add new user
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm password"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>

            <Grid>
              {!validate && (
                <Alert sx={{ margin: "20px" }} severity="error">
                  All fields are needed to ba able to submit this form.
                </Alert>
              )}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add user
            </Button>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Alert variant="filled" severity="success">
              <Box>
                <h3> Operation done successfully</h3>
                <Button
                  onClick={handleClose}
                  variant="filled"
                  color="warning"
                  startIcon={<CloseIcon />}
                >
                  CLOSE
                </Button>
              </Box>
            </Alert>
          </Box>
        </Modal>

        <Modal
          open={fail}
          onClose={handleCloseFail}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Alert variant="filled" severity="error">
              <Box>
                <h3> Error happened , user not added</h3>
                <Button
                  onClick={handleCloseFail}
                  variant="filled"
                  color="warning"
                  startIcon={<CloseIcon />}
                >
                  CLOSE
                </Button>
              </Box>
            </Alert>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}
