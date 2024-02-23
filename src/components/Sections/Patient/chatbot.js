import React, { useState, useEffect } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! Welcome to Med Bot! Please share your query",
      sender: "system", // Added a sender field to distinguish system messages
    },
  ]);
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
    setMessages([...messages, ...data]); // assuming data is an array of messages
  };

  useEffect(() => {
    // Fetch additional messages from the Rasa backend or other sources if needed
    // For now, let's simulate receiving a response after a delay

    // Use a flag to track whether the initial message has been rendered
    let isInitialMessageRendered = false;

    const timeoutId = setTimeout(() => {
      // Render the initial message only if it hasn't been rendered yet
      if (!isInitialMessageRendered) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "How can I assist you further?",
            sender: "system",
          },
        ]);

        // Set the flag to true after rendering the initial message
        isInitialMessageRendered = true;
      }
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);

    // Only run the effect once on mount, so no dependencies are needed
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
      <div className={`message ${message.sender}`} key={index}>
        <p>{message.text}</p>
      </div>
    ));
  };

  return (
    <div className="chatbot-container">
      <form onSubmit={handleSubmit}>
        <div className="messages">{renderMessages()}</div>
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
