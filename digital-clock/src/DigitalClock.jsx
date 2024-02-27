import React from "react";
import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meridium = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)}:${meridium}`;
  }
  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }
  return (
    <>
      <div className="container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigitalClock;
