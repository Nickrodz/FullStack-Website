import { useEffect, useState } from "react";
import Food from "../food";
import Footer from "../footer";
import Header from "../header";
import { Button } from "@/components/ui/button";
import { handleSubmit } from "@/api/infoBackend";

export function Home() {
  type dataItem = {
    username: string;
    password: string;
  };

  const [backendData, setBackendData] = useState("");
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [receive, setReceive] = useState<dataItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/hello")
      .then((res) => res.json())
      .then((data) => setBackendData(data.message));
  }, []);

  return (
    <>
      <Header />
      <h1>This is a test header 1</h1>
      <Food />
      <div className="block"></div>
      <p>{backendData}</p>
      <Button
        onClick={async () => {
          try {
            const res = await fetch("http://localhost:5050/getInfo");
            const data = await res.json();
            setReceive(data);
          } catch (err) {
            console.error("Error fetching data", err);
          }
        }}
      >
        Receive
      </Button>
      <div>
        {receive.length > 0 ? (
          receive.map((item, idx) => (
            <p key={idx}>
              Username: {item.username} | Password: {item.password}
            </p>
          ))
        ) : (
          <p>No data received yet</p>
        )}
      </div>
      <h1>Send Information to backend</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Type a message"
        />
        <Button
          onClick={() => {
            try {
              const data = handleSubmit(input, input2);
              console.log("Server response:", data);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Send
        </Button>
      </div>
      <Footer />
    </>
  );
}
