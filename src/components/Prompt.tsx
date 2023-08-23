import { useEffect, useState } from "react";
import { useIdleTimerContext } from "react-idle-timer";

interface IPrompt {
  open: boolean;
}

export default function Prompt({ open }: IPrompt) {
  const [remaining, setRemaining] = useState<number>(0);

  const { getRemainingTime, activate } = useIdleTimerContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      className="w-full h-full bg-black bg-opacity-40 rounded-sm fixed flex flex-col items-center justify-center left-0 top-0 overflow-auto z-10"
      style={{ display: open ? "flex" : "none" }}
    >
      <div className="bg-[#fefefe] flex flex-col items-center p-4 gap-2 rounded-md">
        <h3>Are you still here?</h3>
        <p>Logging out in {remaining} seconds</p>
        <button
          className="bg-blue-500 px-4 py-2 font-bold rounded text-white"
          onClick={activate}
        >
          Im still here
        </button>
      </div>
    </div>
  );
}
