import React from "react";
import "./style.css";

function Form(props) {
  return (
    <form className="form-inline my-2 my-lg-0">
    <p>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="inputValue" value={props.inputValue} onChange={props.handleInputChange} />
    </p>
    <p>
      <button className="btn btn-warning my-2 my-sm-0" type="submit" onClick={props.handleFirst}>Search by First Name</button>
    </p>
    <p>
      <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={props.handleSearch}>Search by Last Name</button>
    </p>
  </form>
    )
}

export default Form;
