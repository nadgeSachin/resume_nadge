import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "../../styles/DigitalWatch.css"

const DigitalWatch = () => {
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateTime = () => {
    const now = moment();
    const currentTime = now.format('HH:mm');
    const currentDay = now.format('ddd').toUpperCase();
    const currentDate = now.format('MM/DD');

    setTime(currentTime);
    setDay(currentDay);
    setDate(currentDate);
  };

  return (
    <div>
      {/* <div className="watch">
        <div className="watch-inner"></div>
        <div className="time" id="time">{time}</div>
        <hr /> */}
        {/* <div className="datetime"> */}
          {/* <div className="dname">
            <div className="day">DAY</div>
            <div className="date">MONTH/DATE</div>
          </div>
          <div className="dvalue">
            <span className="day d ff" id="day">{day}</span>
            <span className="date ff dd" id="date">{date}</span>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default DigitalWatch;
