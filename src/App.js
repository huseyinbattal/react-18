import "./App.css";
import { useId, useState } from "react";
import { flushSync } from "react-dom";

function App() {
  console.log(useId());

  const [text, setText] = useState(0);
  const [isShow, setIsShow] = useState(0);

  const handleClick = () => {
    flushSync(() => {
      setText(new Date().getTime());
    });

    flushSync(() => {
      setIsShow(new Date().getTime());
    });
  };
  console.log(text);
  console.log(isShow);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
