
import { useState } from "react";

function App() {
  const [region, setRegion] = useState("USA");
  const [timing, setTiming] = useState("");

  const getServiceTiming = () => {
    fetch(`/api/service-timing?region=${region}`)
      .then((res) => res.json())
      .then((data) => setTiming(data.timing || "5-10 minutes"))
      .catch((err) => {
        console.error(err);
        setTiming("5-10 minutes");
      });
  };

  return (
    <div className="App">
      <h1>AI Hospitality Assistant</h1>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="Europe">Europe</option>
        <option value="USA">USA</option>
        <option value="Caribbean">Caribbean</option>
        <option value="Asia">Asia</option>
      </select>
      <button onClick={getServiceTiming}>Get Service Timing</button>
      <h2>Recommended Timing: {timing || "Press button to get timing"}</h2>
    </div>
  );
}

export default App;
