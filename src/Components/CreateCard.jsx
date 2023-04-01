import React from "react";
import Contacts from "./Contacts";
import Card from "./Card";

function CreateCard(Contacts){
    return (
    <Card 
    key = {Contacts.id}
    name= {Contacts.name}
    img= {Contacts.imgURL}
    phone= {Contacts.phone}
    email= {Contacts.email} />
    );
}

export default CreateCard;