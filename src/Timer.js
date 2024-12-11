import React, { useState, useEffect } from 'react';
import ChristmasCard from './ChristmasCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [showCard, setShowCard] = useState(false);
  const targetDate = new Date('December 12, 2024 09:10:00');

  const formattedTargetDate = targetDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setShowCard(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return showCard ? (
    <ChristmasCard />
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card text-center border-primary" style={{ width: '16rem' }}>
        <div className="card-body">
          <h5 className="text-primary">Yo bro, don't open yet. Too embarrassed for you to read now.</h5>
          <p className="text-muted">Come back at this time: {formattedTargetDate}.</p>
          <div className="border p-2 rounded bg-white mt-3">
            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
              <span key={unit} className="d-inline-block mx-2">
                <h6 className="mb-0">{timeLeft[unit] ?? '--'}</h6>
                <small className="text-muted">{unit}</small>
                {index < 3 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
