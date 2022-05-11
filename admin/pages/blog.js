import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Blog from "../components/blogModules";
export default function blog() {
  let url = process.env.NEXT_APP_BACKEND_URL;
  const [blogData, setBlogData] = useState();
  useEffect(() => {
    getBlogData();
  }, []);

  async function getBlogData() {
    await axios.get(`${url}/api/blog`).then((res) => {
      setBlogData(res.data);
    });
  }

  const submitForm = async (event) => {
    event.preventDefault();

    let config = {
      method: "POST",
      baseURL: `${url}/api/blog`,
      data: {
        title: event.target[0].value,
        image: event.target[1].value,
        date: event.target[2].value,
        categoryName: event.target[3].value,
        noOfComments: event.target[4].value,
        isActive: event.target[5].checked,
      },
    };
    await axios(config).then((res) => {
      axios.get(`${url}/api/blog`).then((res) => {
        setBlogData(res.data);
      });
    });
  };
  const deleteItemHandler = async (id) => {
    let config = {
      method: "DELETE",
      baseURL: `${url}/api/blog/${id}`,
      data: {
        id: id,
      },
    };

    axios(config).then((res) => {
      axios.get(`${url}/api/blog`).then((res) => {
        setBlogData(res.data);
      });
    });
  };

  async function updateBlogHandler(event, id) {
    event.preventDefault();

    let config = {
      method: "PUT",
      baseURL: `${url}/api/blog/${id}`,
      data: {
        title: event.target[0].value,
        image: event.target[1].value,
        date: event.target[2].value,
        categoryName: event.target[3].value,
        noOfComments: event.target[4].value,
        isActive: event.target[5].checked,
      },
    };

    axios(config).then((res) => {
      axios.get(`${url}/api/blog`).then((res) => {
        setBlogData(res.data);
      });
    });
  }
  return (
    <div>
      <Blog
        onSubmit={submitForm}
        blogData={blogData}
        onDelete={deleteItemHandler}
        onEdit={updateBlogHandler}
      />
    </div>
  );
}
