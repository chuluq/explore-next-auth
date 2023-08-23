import { useEffect, useState } from "react";
import { useIdleTimerContext } from "react-idle-timer";

export default function CountDown() {
  const { getRemainingTime } = useIdleTimerContext();

  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  const timeTillPrompt = Math.max(remaining - 4_000 / 1000, 0);
  const seconds = timeTillPrompt > 1 ? "seconds" : "second";

  if (timeTillPrompt > 0) {
    return (
      <p>
        {timeTillPrompt} {seconds} until prompt
      </p>
    );
  }

  return null;
}
