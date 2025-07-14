import { useEffect, useState } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Food from "./food";
function App() {
  const [backendData, setBackendData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setBackendData(data.message));
  }, []);
  //https://www.youtube.com/watch?v=I6ypD7qv3Z8

  return (
    <>
      <Header />
      <Food />
      <p>{backendData}</p>
      <Footer />
    </>
  );
}

export default App;
