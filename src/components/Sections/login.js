import React from "react";

export default function Login({ title, subtitle, dark, id }) {
  return (
    <div className="text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
