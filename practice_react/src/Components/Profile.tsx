import React from "react";

const Profile = (props) => {
  const { Name ,LastName}=props
  return (
    <div>
      <h1>Name:{Name} {LastName}</h1>
  
    </div>
  );
};

export default Profile;
