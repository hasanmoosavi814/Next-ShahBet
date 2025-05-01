import { IFixtureCountDownProps } from "@/types";
import { useEffect, useState } from "react";

const FixtureCountdown = ({ matchStart }: IFixtureCountDownProps) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date(matchStart).getTime();
      const now = Date.now();
      const diff = Math.max(0, start - now);
      const totalSeconds = Math.floor(diff / 1000);
      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;
      setCountdown(`${hrs}h ${mins}m ${secs}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [matchStart]);

  return <span>{countdown}</span>;
};

export default FixtureCountdown;
