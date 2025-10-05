import React, { useState, useEffect } from 'react';

interface RealTimeClockProps {
  className?: string;
  textColor?: string;
}

export const RealTimeClock: React.FC<RealTimeClockProps> = ({ 
  className = "", 
  textColor = "text-white" 
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <time className={`${className} ${textColor}`} dateTime={time.toISOString()}>
      {formatTime(time)}
    </time>
  );
};
