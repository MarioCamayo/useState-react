import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const incremetar = () => setNum(num + 1);
  const decremetar = () => setNum(num - 1);

  return (
    <>
      <h1>Contador</h1>
      <div className="container">{num}</div>
      <button onClick={incremetar}>Incremetar</button>
      <button onClick={decremetar}>Decremetar</button>
    </>
  );
}

export default App;
