import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  miliseconds: number;
};

export const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
  useEffect(() => {
    console.log('useEffect')
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((secs) => secs + 1), miliseconds);
  }, [miliseconds]);
  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};
