import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {id: "1",
    "name": "Anas",
    "email": "chilloutwithanas@gmail.com"},
    {id: "2",
    "name": "Khan",
    "email": "mailkhananas@gmail.com"}
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* lets pass props into this component */}
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
