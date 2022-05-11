import React, { useEffect, useRef, useState } from "react";
import { Box, TextField, Button, FormGroup, FormControlLabel, Alert } from "@mui/material";
import Switch from '@mui/material/Switch';
import axios from "../../Axios/index";
import Modal from '@mui/material/Modal';



export const EditRow = ({ setEditRow, chosenTest,getData ,setOpenModal,openModal}) => {


    const [updateTest, setupdateTest] = useState({})

    useEffect(()=>{
        setupdateTest(chosenTest)
    },[]);

    

    const handleChange = (e) => {
        setupdateTest({ ...updateTest, [e.target.name]: e.target.value });
    }


    const handleUpdate = async (e) => {

        const response = await axios.put(`api/testimonials/${updateTest._id}`,updateTest);
        getData(`api/testimonials`)
        setOpenModal(false)

    }
    const handleIsActive =(e)=>{
        setupdateTest({ ...updateTest, isActive: e.target.checked });
    }

    return (
        <Modal
        hideBackdrop
        open={openModal}
        onClose={()=>setOpenModal(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            backgroundColor:"rgb(0 0 0 / 65%)"
        }}
        >
        <Box
            sx={{
                margin: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                flexWrap: "wrap",
                backgroundColor:"#ffff",
                padding:"40px"
            }}
        >
            <Box
                component="form"
                noValidate
                sx={{
                    margin: "50px",
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-around ",
                }}
            >
                <TextField
                    name="Review"
                    required
                    label="Review"
                    autoFocus
                    value={updateTest.Review}
                    onChange={handleChange}
                />
                <TextField
                    required
                    label="reviewer"
                    name="reviewer"
                    value={updateTest.reviewer}
                    onChange={handleChange}

                    autoFocus
                />
                <TextField
                    required
                    label="reviewer title"
                    name="reviewerTitle"
                    value={updateTest.reviewerTitle}
                    onChange={handleChange}

                    autoFocus
                />
                <FormControlLabel
                    checked={updateTest.isActive}
                    control={<Switch color="primary" />}
                    label="Is Active"
                    name="isActive"
                    labelPlacement="end"
                    onChange={handleIsActive}
                    value={updateTest.isActive}

                    
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Button
                    onClick={() => setOpenModal(false)}
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
                    onClick={()=>handleUpdate()}
                    fullWidth
                    variant="contained"
                >
                    Edit testimonial
                </Button>
            </Box>
        </Box>
        </Modal>
    );
};