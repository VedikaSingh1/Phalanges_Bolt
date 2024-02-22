import React from "react";

export default function Doctor({ title, subtitle }) {
  return (
    <div className="text">
      <h1> Doctors </h1>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
