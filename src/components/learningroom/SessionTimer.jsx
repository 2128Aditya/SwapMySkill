import React, { useState, useEffect } from "react";

function SessionTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm text-gray-500">
      Session Time: {seconds}s
    </div>
  );
}

export default SessionTimer;