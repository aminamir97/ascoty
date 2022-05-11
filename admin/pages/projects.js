import axios from "axios";
import { useState, useEffect } from "react";
import Projects from "../components/projectsModules";

import React from "react";

export default function ProjectsPage() {
  let url = process.env.NEXT_APP_BACKEND_URL;

  const [dataItems, setDataItems] = useState();

  useEffect(() => {
    getProjectData();
  }, []);

  async function getProjectData() {
    await axios.get(`${url}/api/projects`).then((res) => {
      setDataItems(res.data);
    });
  }

  const submitForm = async (event) => {
    event.preventDefault();

    let config = {
      method: "POST",
      baseURL: `${url}/api/projects`,
      data: {
        title: event.target[0].value,
        image: event.target[1].value,
        featuredImage: event.target[3].value,
        description: event.target[4].value,
      },
    };
    axios(config).then((res) => {
      axios.get(`${url}/api/projects`).then((res) => {
        setDataItems(res.data);
      });
    });
  };

  const deleteItemHandler = async (id) => {
    let config = {
      method: "DELETE",
      baseURL: `${url}/api/projects/${id}`,
      data: {
        id: id,
      },
    };

    axios(config).then((res) => {
      axios.get(`${url}/api/projects`).then((res) => {
        setDataItems(res.data);
      });
    });
  };

  async function editItemHandler(event, id) {
    event.preventDefault();

    let config = {
      method: "PUT",
      baseURL: `${url}/api/projects/${id}`,
      data: {
        title: event.target[0].value,
        image: event.target[1].value,
        featuredImage: event.target[3].value,
        description: event.target[4].value,
      },
    };

    axios(config).then((res) => {
      axios.get(`${url}/api/projects`).then((res) => {
        setDataItems(res.data);
      });
    });
  }

  return (
    <div>
      <Projects
        onSubmit={submitForm}
        items={dataItems}
        onDelete={deleteItemHandler}
        onEdit={editItemHandler}
      />
    </div>
  );
}
