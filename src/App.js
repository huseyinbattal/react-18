import "./App.css";
import { useSyncExternalStore } from "react";

function App() {
  const screenWidth = useSyncExternalStore((listener) => {
    window.addEventListener("resize", listener)
    
    return () => {
  window.removeEventListener("resize",listener)
}

  },()=>window.innerWidth)
  return (
    <>
    {screenWidth}
    </>
 )
}

export default App;
