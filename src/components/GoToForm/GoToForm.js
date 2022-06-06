import React from "react";
import { Link } from "react-router-dom";
import "./GoToForm.css"

const GoToForm = () => {
  return (
    <Link to="/form">
      <button className="btn btn-alForm ">Completar datos </button>
    </Link>
  );
};

export default GoToForm;
