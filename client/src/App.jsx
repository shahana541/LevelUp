import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("http://localhost:3000/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Error connecting to server!");
      });
  }, []);

  return (
    <div>
      <h1>Frontend-Backend Connection Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
