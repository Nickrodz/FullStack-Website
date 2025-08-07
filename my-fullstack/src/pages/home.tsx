import { useEffect, useState } from "react";
import Food from "../food";
import Footer from "../footer";
import Header from "../header";

export function Home() {
  const [backendData, setBackendData] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5050/sub", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.status + " | Echo: ");
  };

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
      <h1>Send Information to backend</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSubmit}>Send</button>
        <p>{response}</p>
      </div>
      <Footer />
    </>
  );
}
