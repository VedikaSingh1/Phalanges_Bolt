import React from "react";
import "./our_doctors.css";

export default function OurDoctors({ title, subtitle, dark, id }) {
  // URLs for images
  const imageUrls = [
    "https://media.istockphoto.com/id/1468678633/photo/healthcare-doctor-and-black-man-with-tablet-for-telehealth-research-and-consulting-patient.webp?b=1&s=170667a&w=0&k=20&c=JZ4QGki5adarB22PhUyYBDbLKH8oqOvk2N0tbeHit_E=",
    "https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=",
    "https://media.istockphoto.com/id/1404995293/video/close-up-of-mature-asian-man-doctors-medical-results-during-consultation-on-tablet-computer.jpg?s=640x640&k=20&c=uPTfAMR2LUGEtOrZvrmDNVDi5L0b7RVA25dEH_fqdeo=",
    "https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=nr4XaWnRPQnWqwhzahajZhskIDG1yK9DmIteV5gpUOI=",
    "https://assets-global.website-files.com/624a563ae078560d88d5d45e/64a68103b6db9c22b2a281f4_Why-Cardiology-Consultation-is-Important_.jpg",
    "https://media.istockphoto.com/id/869287988/photo/the-best-in-the-medical-field.jpg?s=612x612&w=0&k=20&c=HaJSdcCfpsrSAs6nfzxrr21W_qlxBEwFQ1YpjtJUTQ0=",
    "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-95202544/95202544.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoE687Mo6EVAXV9n9y8jErpcnWZhsYwBA1H2PBWYN7Qt8UZU0IepQUvV-LRahYKbgQnM&usqp=CAU",
  ];

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="gallery">
          {imageUrls.map((url, index) => (
            <span key={index} style={{ "--i": index + 1 }}>
              <img src={url} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
