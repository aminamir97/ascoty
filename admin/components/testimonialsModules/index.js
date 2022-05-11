import React, { useEffect, useState } from 'react';
import UsersTable from "./OneTest";
import classes from "./styles.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Switch from "@mui/material/Switch";

import axios from '../../Axios/index'
import { EditRow } from './editRow';
export default function Test(props) {


    const [data, setdata] = useState([])
    const [testimonial, setTestimonial] = useState({})
    const [open, setOpen] = useState(false);
    const [editRow,setEditRow] =useState(false);
    const [chosenTest,setChosenTest] =useState({});
    const [openModal, setOpenModal] = useState(false);





    useEffect(() => {

        getData('api/testimonials');


    }, [])


    async function getData(url) {
        const response = await axios.get(url)
        setdata(response.data)
    }
    const HandelChange = (e) => setTestimonial({ ...testimonial, [e.target.name]: e.target.value });


    const handleSubmit = async (e) => {


        e.preventDefault()
        const response = await axios.post("/api/testimonials", testimonial);
        setOpen(false)
        getData('api/testimonials');


    };


    const handleDelete = async (e, chosenId) => {

        e.preventDefault()

        const response = await axios.delete(`api/testimonials/${chosenId}`, { data: { _id: chosenId } })


        getData('api/testimonials');


    }

    return (
        <div className={classes.styleAllProject}>
            <center>
                <Button
                    onClick={() => setOpen(true)}
                    className={classes.styleButton}
                    variant="outlined"
                >
                    Add New testimonial
                </Button>

            </center>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add New testimonial</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <input type="text" name="Review" placeholder="Review" onChange={HandelChange} />
                        <input type="text" name="reviewer" placeholder="reviewer Name" onChange={HandelChange} />
                        <input type="text" name="reviewerTitle" placeholder="reviewer Title" onChange={HandelChange} />

                        <div className={classes.actions}>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button type="submit">
                                Add
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <div className={classes.styleStack}>
                <UsersTable data={data} handleDelete={handleDelete} setChosenTest={setChosenTest} setEditRow={setEditRow} setOpenModal={setOpenModal} />
            </div>


            {openModal && <EditRow openModal={openModal} setOpenModal={setOpenModal} chosenTest={chosenTest} setEditRow={setEditRow} getData={getData}/>}




            
        </div>
    );
}


