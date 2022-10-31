import React from "react";

const contactList = (props) => {
  console.log(props)

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div className="item">
        <div className="header">{contact.name}</div>
        <div>
          {contact.email}
        </div>
        <i className="trash alternate outline icon"></i>
      </div>
    )
  })
  return (
    <div className="ui called list">
      <h1>contacts List</h1>
      {renderContactList}
    </div>
  )
}

export default contactList