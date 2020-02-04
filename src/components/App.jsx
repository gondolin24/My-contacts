import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function createCard(contact){
  return (
    <Card 
      key={contact.id}
      title={contact.title}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
      passion={contact.passion}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My First React App</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
