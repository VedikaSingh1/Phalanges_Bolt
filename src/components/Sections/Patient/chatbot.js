import React, { useState, useEffect } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState(["Hello, how can I help you?"]);
  const [input, setInput] = useState("");

  // Function to send a message to the Rasa backend
  const sendMessage = async () => {
    // Send the input message to the Rasa backend
    const response = await fetch("https://cb12-136-233-9-98.ngrok-free.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: input,
      }),
    });

    // Parse the response and update the messages state
    const data = await response.json();
    setMessages([...messages, ...data]);
  };

  // Function to receive a message from the Rasa backend
  const receiveMessage = async () => {
    // Fetch data using "GET" from the same API
    const response = await fetch("https://cb12-136-233-9-98.ngrok-free.app", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Parse the response and update the messages state
    const data = await response.json();
    setMessages([...messages, ...data]);
  };

  // useEffect to call receiveMessage on component mount
  useEffect(() => {
    receiveMessage();
  }, []); // empty dependency array ensures it only runs once on mount

  // Function to handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
    setInput("");
  };

  // Function to render the chatbot messages
  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index}>
        <p>{message.text}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="messages">{renderMessages()}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Start Typing..."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
