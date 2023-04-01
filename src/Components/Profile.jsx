import React from "react";
import Contacts from "./Contacts.js";

function Profile(props){
  return (
<img className="circle-img" src={props.img} alt="avatar_img" />
  );
}

export default Profile;