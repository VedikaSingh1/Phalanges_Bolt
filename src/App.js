import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/NavBar/navBar";
import Intro from "./components/Sections/intro";
import OurDcotors from "./components/Sections/our_doctors";
import Services from "./components/Sections/services";
import ContactUs from "./components/Sections/contact_us";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro
          title=""
          subtitle="Transforming healthcare with seamless patient-doctor interactions. Empower your well-being journey with our user-friendly platform. Your health, our priority!"
          dark={false}
          id="section1"
        />
        <OurDcotors
          title="Our Doctors"
          subtitle="In the realm of healthcare, our world-class doctors stand as beacons of expertise and compassion. Their unwavering commitment to patient care, coupled with their extensive knowledge and skill, defines a standard of excellence that transcends boundaries. These dedicated professionals navigate the intricacies of medical science with precision and grace, providing invaluable support to those in need. Their tireless efforts, coupled with a genuine concern for the well-being of their patients, create a harmonious synergy that embodies the spirit of healthcare at its finest. Our world-class doctors inspire confidence, instill hope, and exemplify the epitome of medical excellence, shaping a healthier and brighter future for us all."
          dark={true}
          id="section2"
        />
        <Services
          title="Our Services"
          subtitle="Welcome to our comprehensive healthcare services, where your well-being is our top priority. With our 24/7 Chatbot, receive instant assistance and guidance at any time. Seamlessly schedule appointments through our user-friendly Appointment Booking system, ensuring convenience and flexibility. Access the expertise of the Best Doctors in various specialties, offering personalized and cutting-edge medical care. Our Multispeciality approach ensures a holistic and tailored healthcare experience. Experience the future of healthcare with AI Physiotherapy analysis, bringing innovative solutions to enhance your physical well-being. Embrace a journey of personalized care, advanced technology, and compassionate service with us. Your health, your choice, our commitment."
          dark={false}
          id="section3"
        />
        <ContactUs
          title="Contact Us"
          subtitle="Meet Our Team"
          dark={true}
          id="section4"
        />
      </div>
    );
  }
}

export default App;
