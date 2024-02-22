import React from "react";
import "./patient.css";
import Chatbot from "./chatbot";

import { useNavigate } from "react-router-dom";

export default function Patient() {
  const navigate = useNavigate();
  const handlCLick = (link) => () => {
    navigate(`/${link}`);
  };

  return (
    <div className="container">
      <div className="box-1">
        <div className="button-1">Video call</div>
        <div className="button-1" onClick={handlCLick("appointment-booking")}>
          Book Appointment
        </div>
        <div className="button-1">Chat with Doctor</div>
      </div>
      <div className="box-2">
        <Chatbot />
      </div>
    </div>
  );
}
