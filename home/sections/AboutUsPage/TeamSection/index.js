import classes from "./styles.module.css";
import React from "react";
import TeamTitle from "../../../components/teamMember/TeamTitle/teamTitle";
import TeamCard from "../../../components/teamMember/TeamCard";

const teamData = [
  {
    id: 1,
    name: "Perspiciatis Unde",
    title: "CEO, Partner",
    brief:
      "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image: "https://static.ascot.ws/assets/Images/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  {
    id: 2,
    name: "Perspiciatis Unde",
    title: "CEO, Partner",
    brief:
      "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image: "https://static.ascot.ws/assets/Images/beautiful-woman-avatar-character-icon-free-vector.jpg",
  },
  {
    id: 3,
    name: "Perspiciatis Unde",
    title: "CEO, Partner",
    brief:
      "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image: "https://static.ascot.ws/assets/Images/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  {
    id: 4,
    name: "Perspiciatis Unde",
    title: "CEO, Partner",
    brief:
      "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image: "https://static.ascot.ws/assets/Images/beautiful-woman-avatar-character-icon-free-vector.jpg",
  },
];

function TeamSection({items, teamsRef}) {
  return (
    <div className={classes.team} ref={teamsRef}>
      <TeamTitle />
      <div className={classes.styleOneMember}>
        {teamData.map((item) => {
          return (
            <TeamCard
              key={item.id}
              brief={item.brief}
              name={item.name}
              title={item.title}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
