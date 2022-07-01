/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import arrow from "../assets/arrow.png";

function Chat({ socket, username }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        author: username,
        message: currentMessage,
        id: currentUser,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
      };

      await socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      setCurrentUser(socket.id);
    });
  }, [socket]);

  return (
    <div className="shadow-2xl chat-window">
      <div className="chat-header">
        <p>Apside Messaging</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={currentUser === messageContent.id ? "you" : "other"} // changer classe css pour afficher droite/gauche
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Bonjour..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            // eslint-disable-next-line no-unused-expressions
            event.key === "Enter" && sendMessage();
          }}
        />
        <button
          className="bg-white hover:bg-orange-400 rounded-l-3xl grid place-content-center "
          type="button"
          onClick={sendMessage}
        >
          <img className="w-1/3" src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
