import { useState } from "react";

const WhatsappShareApi = () => {
  const [message, setMessage] = useState("This is the message being sent");
  return (
    <div>
      <div>
        <label htmlFor="message">Message being sent.</label>
        <input
          type="text"
          id="message"
          placeholder={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div>
        <h2>Message:</h2>
        <p>{message}</p>
      </div>
      <div>
        <h2>Deeplink</h2>
        <a href={`whatsapp://send?text=${message}`}>Click to share</a>
      </div>
      <div>
        <h2>Universal Link</h2>
        <a target="_blank" href={`https://wa.me/?text=${message}`}>
          Click to share
        </a>
      </div>
    </div>
  );
};

export default WhatsappShareApi;
