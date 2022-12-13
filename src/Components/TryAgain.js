import React from "react";
import { FaSadTear } from "react-icons/fa";

// accept props from parent component
const TryAgain = ({ playAgain, score, quit }) => {
  return (
    <div className="modal">
      {/* modal content */}
      <section className="modal-content">
        <p>Time's up!</p>
        <p>You scored: {score}/8</p>
        <div>
          <FaSadTear className="emoji" />
        </div>
        <p>Sorry You Lost</p>
        {/* play again and quit options */}
        <div className="buttons">
          <button onClick={playAgain}>Restart</button>
          <button onClick={quit}>Quit</button>
        </div>
      </section>
    </div>
  );
};

export default TryAgain;
