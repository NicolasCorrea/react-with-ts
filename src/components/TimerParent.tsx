import { useState } from "react";
import { Timer } from "./Timer";

export const TimerParent = () => {
  const [miliseconds, setMiliseconds] = useState(1000)
  return (
    <>
      <span>milisegundos {miliseconds}</span>
      <br />
      <button className="btn btn-primary" onClick={() => setMiliseconds(1000)} >1000</button>
      <button className="btn btn-primary ms-2" onClick={() => setMiliseconds(2000)} >2000</button>
      <button className="btn btn-primary ms-2" onClick={() => setMiliseconds(3000)} >3000</button>
      <Timer miliseconds={miliseconds}/>
    </>
  );
};
