import React from "react";
import "./patient.css";
import Chatbot from "./chatbot";

export default function Patient() {
  return (
    <div className="container">
      <div className="box-1">
        <div className="button-1">Video call</div>
        <div className="button-1">Book Appointment</div>
        <div className="button-1">Chat with Doctor</div>
      </div>
      <div className="box-2">
        <Chatbot />
      </div>
    </div>
  );
}
