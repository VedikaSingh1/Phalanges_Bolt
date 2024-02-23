import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

export default function DatePicking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [doctorList, setDoctorList] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleCheck = () => {
    if (selectedTime && selectedSpeciality && selectedSpeciality) {
      // Make API call to fetch list of doctors
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const API_GET = `https://phalanges-bolt.onrender.com/doctor/getall`;

      fetch(API_GET)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDoctorList(data);
        })
        .catch((error) => {
          console.error("Error fetching doctor list:", error);
        });

      //setIsAppointmentBooked(true);
    } else {
      setDoctorList(["Error !"]);
    }
  };

  const handleBookAppointment = (selectedDoctor) => {
    if (selectedTime && selectedSpeciality && selectedSpeciality) {
      const API_POST = `https://phalanges-bolt.onrender.com/patient/createappointment`;

      const appointmentData = {
        doctor_email: selectedDoctor.email,
        date: selectedDate.toISOString(),
        time: selectedTime,
      };
      const jwtToken = localStorage.getItem("jwtToken");
      //console.log('stored jwtToken in landing: ',jwtToken)
      if (!jwtToken) {
        console.log("No JWT token found.");
      }

      fetch(API_POST, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.success) {
            setIsAppointmentBooked(true);
          } else {
            setDoctorList(["Error: " + data.message]);
          }
        })
        .catch((error) => {
          console.error("Error booking appointment:", error.message);
          setDoctorList(["Error: Failed to fetch data"]);
        });
    } else {
      setDoctorList(["Error: Please fill in all the fields"]);
    }
  };

  useEffect(() => {
    // Logic for highlighting the selected doctor record
    const doctorListContainer = document.getElementById("list");

    if (doctorListContainer) {
      const doctorItems = doctorListContainer.getElementsByTagName("li");

      // Remove highlighting from all doctor items
      Array.from(doctorItems).forEach((item) => {
        item.classList.remove("selected-doctor");
      });

      // Highlight the selected doctor item
      if (selectedDoctor) {
        const selectedDoctorItem = doctorListContainer.querySelector(
          `[data-id="${selectedDoctor.email}"]`
        );
        if (selectedDoctorItem) {
          selectedDoctorItem.classList.add("selected-doctor");
        }
      }
    }
  }, [selectedDoctor, doctorList]);

  return (
    <div className="main">
      <div className="appointment-booking-container" id="selection">
        <div className="date-picker-container">
          <h1> Booking</h1>
          <label>Date: </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="time-picker-container">
          <label>Time: </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Select a time</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="05:00 PM">05:00 PM</option>
          </select>
        </div>
        <div className="speciality-picker-container">
          <label>Speciality: </label>
          <select
            value={selectedSpeciality}
            onChange={(e) => setSelectedSpeciality(e.target.value)}
          >
            <option value="">Select a speciality</option>
            <option value="dentist">Dentist</option>
            <option value="orthopedic">Orthopedic</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="ophthalmologist">Ophthalmologist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="neurologist">Neurologist</option>
          </select>
        </div>
        <button onClick={handleCheck}>Check For Doctors</button>
        <button onClick={handleBookAppointment(selectedDoctor)}>
          Book Appointment
        </button>
        {isAppointmentBooked && (
          <p>{`Successfully booked appointment on ${selectedDate.toDateString()} at ${selectedTime}`}</p>
        )}
      </div>

      <div className="appointment-booking-container" id="list">
        {/* Render the list of doctors */}
        <ul>
          {doctorList.map((doctor) => (
            <li
              className="record"
              key={doctor.email}
              onClick={() => setSelectedDoctor(doctor)}
            >
              <ul>
                <li className="name">{doctor.name}</li>
                <li className="text">{doctor.specialty}</li>
                <li className="text">{doctor.hospital}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
