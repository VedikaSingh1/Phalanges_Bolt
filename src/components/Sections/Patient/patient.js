import React from "react";

export default function Patient({ title, subtitle }) {
  return (
    <div className="text">
      <h1> Patient </h1>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
