import React from "react";
import ReactCardSlider from "./slider";

// Define a function to handle the click event
const sliderClick = (index) => {
  console.log(`Card clicked! Index: ${index}`);
  // You can add your custom logic for handling the click event here
};

const slides = [
  {
    image:
      "https://media.istockphoto.com/id/1465545513/photo/chatbot.jpg?s=612x612&w=0&k=20&c=3IZrVSv95FmcHt744wvcvZiml1LXTnEQimq_3V5CCbQ=",
    title: "24*7 Chatbot Support",
    description:
      "Access instant assistance and guidance around the clock with our 24/7 Chatbot.",
    clickEvent: () => sliderClick(0), // Replace 0 with the desired index
  },
  {
    image:
      "https://www.shutterstock.com/shutterstock/videos/1099147499/thumb/1.jpg?ip=x480",
    title: "Appointment Booking",
    description:
      "Seamlessly schedule your appointments with our user-friendly booking system.",
    clickEvent: () => sliderClick(1), // Replace 1 with the desired index
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbPvkj-qCvc-Y9IJfvdeZcjzf6Tr3FUbZwWFrUO6PxqLMaw5dB",
    title: "Best Doctors",
    description:
      "Experience top-notch medical care with access to the expertise of the best doctors in various specialties.",
    clickEvent: () => sliderClick(2), // Replace 2 with the desired index
  },
  {
    image: "https://images.megapixl.com/5948/59487742.jpg",
    title: "Multispeciality",
    description:
      "Receive holistic and tailored healthcare through our multispecialty approach",
    clickEvent: () => sliderClick(3),
  },
  {
    image:
      "https://www.shutterstock.com/shutterstock/videos/1066412878/thumb/1.jpg?ip=x480",
    title: "AI Physiotherapy analysis",
    description:
      "Embrace innovative solutions for physical well-being with AI-driven physiotherapy analysis.",
    clickEvent: () => sliderClick(4),
  },
  {
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/65/580/desktop-wallpaper-chatbot-chat-robot-instant-technology-aid-application-assistance-bot-bubble-communication-concept-conversation-digital-finger-hand-help-interaction-marketing-message-service-smartphone.jpg",
    title: "Cutting-edge medical care",
    description:
      "Access advanced medical care at the forefront of healthcare innovation.",
    clickEvent: () => sliderClick(5),
  },
  {
    image:
      "https://s.yimg.com/ny/api/res/1.2/j7ft3UReJNCKU1YMmxWffQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2023-07/58769270-1f29-11ee-bb69-24586e1e3c7d",
    title: "Personalized care",
    description:
      "Embark on a journey of personalized care tailored to your unique health needs.",
    clickEvent: () => sliderClick(6),
  },
  {
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/65/580/desktop-wallpaper-chatbot-chat-robot-instant-technology-aid-application-assistance-bot-bubble-communication-concept-conversation-digital-finger-hand-help-interaction-marketing-message-service-smartphone.jpg",
    title: "Instant assistance ",
    description:
      "Receive immediate support and guidance through our chatbot for instant assistance.",
    clickEvent: () => sliderClick(0),
  },
];

const Services = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default Services;
