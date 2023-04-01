import React from "react";
import Card from "./Card";
import Contacts from "./Contacts.js";
import Profile from "./Profile";
import CreateCard from "./CreateCard";

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    {Contacts.map(CreateCard)}
    {/* <Profile img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"/>
      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
