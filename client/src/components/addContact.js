import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type = "text" name="name" placeholder="name"></input>
            <label>email</label>
            <input type = "email" name="email" placeholder="email"></input>
          </div>
          <button className='ui button blue'>submit</button>
        </form>
      </div>

    );
  }

}

export default AddContact