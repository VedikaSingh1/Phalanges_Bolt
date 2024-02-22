import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

export default function DatePicking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const handleBookAppointment = () => {
    if (selectedTime && selectedTime) {
      setIsAppointmentBooked(true);
      //const API_Post ="https://phalanges-bolt.onrender.com/patient/createappointment";
    } else {
      // Handle error, show a message or alert
    }
  };

  return (
    <div className="main">
      <div className="appointment-booking-container">
        <div className="date-picker-container">
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

        <button onClick={handleBookAppointment}>Book Appointment</button>

        {isAppointmentBooked && (
          <p>{`Successfully booked appointment on ${selectedDate.toDateString()} at ${selectedTime}`}</p>
        )}
      </div>
      <div className="appointment-booking-container" id="list"></div>
    </div>
  );
}
