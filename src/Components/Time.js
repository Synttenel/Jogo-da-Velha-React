import React, { useState, useEffect } from "react";

function Time(){
 
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {

      setTime(new Date());
    }, 1000)
  }, [])

  const handleTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM":"AM";

    hours = hours % 12  || 12;

    return `${hours}:${minutes}:${seconds} ${meridian}`;
  }

  return(
    <>
      <span>
        {handleTime()}
      </span>
    </>
  )
}

export default Time;