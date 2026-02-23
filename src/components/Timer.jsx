import { useState, useEffect } from "react";

export default function Timer({ startTime }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const secondsInMs = Date.now() - startTime;
      setElapsed(Math.floor(secondsInMs / 1000));
    }, 1000);

    return () => clearInterval(interval); //stop when finished or deleted
  }, [startTime]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-blue-600 font-mono font-bold text-lg bg-blue-50 px-3 py-1 rounded-md border border-blue-200 inline-block">
      ⏱️ {formatTime(elapsed)}
    </div>
  );
}
