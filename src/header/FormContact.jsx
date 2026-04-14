
import React, { useState } from "react";
import "./ContactPage.css";

const FormContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [message, setMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("Enter your name");
    if (!email.trim()) return alert("Enter your email");
    if (!phone.trim()) return alert("Enter phone");
   
    if (!message.trim()) return alert("Enter message");

    alert("Form submitted ✅");

    setName("");
    setEmail("");
    setPhone("");

    setMessage("");
  };

  return (
    <form className="contact-form" onSubmit={formHandler}>

      <div className="contact-form-group">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="contact-form-group">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="contact-form-group">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        
      </div>

      <div className="contact-form-group">
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button className="contact-btn" type="submit">
        Send Message
      </button>

    </form>
  );
};

export default FormContact;