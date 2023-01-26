import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black flex justify-center items-center h-auto">
      <Card />
    </div>
  );
}

export default App;
