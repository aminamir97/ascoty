import { useState, useEffect } from "react";
import axios from "axios";
import Teams from "../components/teamsModules";

function TeamsPage(props) {
  let url = process.env.NEXT_APP_BACKEND_URL;

  const [dataItems, setDataItems] = useState(props.projectsData);

  useEffect(() => {
    getProjectData();
  }, []);

  async function getProjectData() {
    await axios.get(`${url}/api/teams`).then((res) => {
      setDataItems(res.data);
    });
  }

  const submitTeamForm = async (event) => {
    event.preventDefault();

    let config = {
      method: "POST",
      baseURL: `${url}/api/teams`,
      data: {
        avatar: event.target[0].value,
        name: event.target[1].value,
        title: event.target[2].value,
        brief: event.target[3].value,
      },
    };
    axios(config).then((res) => {
      axios.get(`${url}/api/teams`).then((res) => {
        setDataItems(res.data);
      });
    });
  };

  const deleteTeamHandler = async (id) => {
    let config = {
      method: "DELETE",
      baseURL: `${url}/api/teams/${id}`,
      data: {
        id: id,
      },
    };

    await axios(config).then((res) => {
      axios.get(`${url}/api/teams`).then((res) => {
        setDataItems(res.data);
      });
    });
  };

  const editTeamHandler = async (event, id) => {
    event.preventDefault();

    let config = {
      method: "PUT",
      baseURL: `${url}/api/teams/${id}`,
      data: {
        avatar: event.target[0].value,
        name: event.target[1].value,
        title: event.target[2].value,
        brief: event.target[3].value,
      },
    };

    axios(config).then((res) => {
      axios.get(`${url}/api/teams`).then((res) => {
        setDataItems(res.data);
      });
    });
  };
  return (
    <div>
      <Teams
        onSubmit={submitTeamForm}
        items={dataItems}
        onDelete={deleteTeamHandler}
        onEdit={editTeamHandler}
      />
    </div>
  );
}

export default TeamsPage;
