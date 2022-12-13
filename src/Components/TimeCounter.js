import React, { useState, useEffect } from "react";
import TryAgain from "./TryAgain";
import UserWon from "./UserWon";

// accept props from parent component
const TimeCounter = ({ score, setScore }) => {
  // countdown counter set to start from 20 to 0
  const [countdown, setCountdown] = useState(20);
  // userLost and userWon values initialized to false
  const [userLost, setUserLost] = useState(false);
  const [userWon, setUserWon] = useState(false);

  // useEffect to render every time the countdown time state changes
  useEffect(() => {
    let time = setInterval(() => {
      // countdown 
      setCountdown((prevState) => {
        return prevState - 1;
      });

      // if score is less than 8 and count is zero
      if (score < 8 && countdown === 0) {
        // then the user lost
        setUserLost(true);
        setCountdown(0);
      }

      //if the score is 8 and count is greater than zero
      if (score === 8 && countdown > 0) {
        // then user won
        setUserWon(true);
        setCountdown(0);
      }
      // count is counting down in seconds
    }, 1000);

    //clear side effects/clean up function before useEffect re-renders
    return () => clearInterval(time);
  });

  // play Again
  const playAgain = () => {
    // set the state to their default values
    setUserLost(false);
    setUserWon(false);
    setCountdown(20);
    setScore(0);
    // refresh the entire page(also reshufle the images)
    window.location.reload();
  };

  // quit function
  const quit = () => {
    // close modals
    setUserLost(false);
    setUserWon(false);
    // set the score to zero
    setScore(0);
    // stop the countdown
    clearInterval(0);
  };

  return (
    <div>
      {/* show count down */}
      <h4 className="countdown">Time Countdown: 0{countdown}</h4>
      {/* TryAgain and UserWon Components will be rendered conditionally if their values are truthy*/}
      {userLost && <TryAgain playAgain={playAgain} score={score} quit={quit} />}
      {userWon && <UserWon playAgain={playAgain} score={score} quit={quit} />}
    </div>
  );
};

export default TimeCounter;
