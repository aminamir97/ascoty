import React from "react";
import classes from "./style.module.css";
import ProjCard from "../../../components/ProjectsPage/OneProjectCard/ProjCard";
import Pagination from "../../../components/Pagination";

export const ProjectsSection = () => {
  const staticData = [
    {
      id: 1,
      title: "Temporibus autem quibusdam et aut",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumquenihil impedit quo minus id quod maxime",
      image:
        "https://static.ascot.ws/assets/Images/pexels-cottonbro-3585090.jpg",
    },
    {
      id: 2,
      title: "Quis nostrum exercitationem",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
      image:
        "https://static.ascot.ws/assets/Images/pexels-ali-pazani-2777898.jpg",
    },
    {
      id: 3,
      title: "Sed ut perspiciatis",
      description:
        "omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      image:
        "https://static.ascot.ws/assets/Images/tech_smartphone_global_shutterstock_304659113tech-0eaac98f1a064570a31d81bc31a0aff0.jpg",
    },
    {
      id: 4,
      title: "Sed ut perspiciatis",
      description:
        "omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      image:
        "https://static.ascot.ws/assets/Images/tech_smartphone_global_shutterstock_304659113tech-0eaac98f1a064570a31d81bc31a0aff0.jpg",
    },
    {
      id: 5,
      title: "Sed ut perspiciatis",
      description:
        "omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      image:
        "https://static.ascot.ws/assets/Images/tech_smartphone_global_shutterstock_304659113tech-0eaac98f1a064570a31d81bc31a0aff0.jpg",
    },
  ];
  return (
    <div className={classes.container}>
      {staticData.map((item) => {
        return <ProjCard id={item.id} title={item.title} image={item.image} key={item.id} />;
      })}
      
    </div>
  );
};
