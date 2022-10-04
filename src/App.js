import "./App.css";
import { useId, useState, useTransition} from "react";
import { flushSync } from "react-dom";

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState("");

  function handleBtnClick() {
    startTransition(() => {
      setCount("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2DAPIyDJ3hWNWAcDyvlaNtK0UPG3yh9BTN-jJvdz&s");
    })
  }

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
     

        <div>
          {isPending && <div><img src={count} /></div>}
          
          <button onClick={handleBtnClick}>Image</button>
    </div>
      </header>
    </div>
  );
}

export default App;
