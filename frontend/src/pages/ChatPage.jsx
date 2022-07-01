import io from "socket.io-client";
import Chat from "../components/Chat";

const socket = io.connect("http://localhost:3001");

function Chatpage() {
  const userName = "John";

  return (
    <section className="ChatPage">
      <div className="joinChatContainer">
        <Chat socket={socket} username={userName} />
      </div>
    </section>
  );
}
export default Chatpage;
