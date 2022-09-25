import { useState, useEffect } from "react";
import 'animate.css';
import Started from "./Started";
import Welcome from "./Welcome";

function App() {
  const [Score, setScore] = useState(0)
  const [High, setHighScore] = useState(0)
  const [Start, setStart] = useState(false)
  useEffect(() => {
    let pastHigh = localStorage.getItem('High');
    if (pastHigh > High){
      setHighScore(pastHigh)
    }
  }, [])
  useEffect(() => {
    if (Score > High){
      setHighScore(Score)
      localStorage.setItem('High', Score);
    }
  }, [Score])


  return (
    <div className="Container">
      {!Start && <Welcome high={High} Start={setStart}/>}
      {Start && <Started setScore={setScore} score={Score} high={High}/>}
    </div>
  );
}

export default App;
