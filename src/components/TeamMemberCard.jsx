import React from 'react';

const TeamMemberCard = (props) => {
  return (
    <div>
      <img src='{props.image}'/>
      <h2>{props.name}</h2>
      <h4>{props.role}</h4>
      <p>{props.bio}</p>
    </div>
  );
};

export default TeamMemberCard;