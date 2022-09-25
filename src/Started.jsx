import { useState, useEffect } from "react";
import 'animate.css';
import Header from "./Header";
import Main from "./Main";

function Started(props) {
    const [Picked, setPicked] = useState(false);
    let Score = props.score;
    let High = props.high;
    let setScore = props.setScore;
  return (
    <>
      <Header score={Score} high={High}/>
      <h3 className="Pick">{Picked ? 'Rolling:' : 'Pick your Attack Style:'}</h3>
      <Main setScore={setScore} picked={setPicked} picking={Picked} score={Score} high={High}/>
      <div className="Rules">Rules</div>
    </>
  );
}

export default Started;