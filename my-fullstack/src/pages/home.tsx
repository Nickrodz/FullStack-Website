import { useEffect, useState } from "react";
import Food from "../food";
import Footer from "../footer";
import Header from "../header";
import { Button } from "@/components/ui/button";

export function Home() {
  type dataItem = {
    username: string;
    password: string;
  };

  const [backendData, setBackendData] = useState("");
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
      <Footer />
    </>
  );
}
