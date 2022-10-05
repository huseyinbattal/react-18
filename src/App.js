import "./App.css";
import { useDeferredValue, useId, useState, useTransition } from "react";
import { flushSync } from "react-dom";

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState("");
  const [text, setText] = useState(0);
  const [otherText, setOtherText] = useState();
  const [isShow, setIsShow] = useState(0);
  const [state, setState] = useState([1, 2, 3, 4, 5, 6]);
  const data = useDeferredValue(state);

  function handleBtnClick() {
    startTransition(() => {
      setCount(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2DAPIyDJ3hWNWAcDyvlaNtK0UPG3yh9BTN-jJvdz&s"
      );
    });
  }

  //console.log(useId());

  const handleClick = () => {
    flushSync(() => {
      setText(new Date().getTime());
    });

    flushSync(() => {
      setIsShow(new Date().getTime());
    });
  };
  //console.log(text);
  //console.log(isShow);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {JSON.stringify(otherText)}
        <div>
          {isPending && (
            <div>
              <img src={count} alt=""/>
            </div>
          )}
          <button
            onClick={() => {
              setTimeout(() => {
                setState([1, 2, 3, 4, 5, 6]);
              }, 4000);
            }}
          >
            Test
          </button>
          <input
            value={otherText}
            onChange={(e) => {
              setOtherText(e.target.value);
              setTimeout(() => {
                setState([1, 2, 3]);
              }, 2000);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
