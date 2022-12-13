import React from "react";
import { MdCelebration } from "react-icons/md";

// accept props from parent component
const UserWon = ({ playAgain, score, quit }) => {
  return (
    <div className="modal">
      {/* modal content */}
      <div className="modal-content">
        <p>Congratulations!</p>
        <div>
          <MdCelebration className="emoji" />
        </div>
        <p>You Won!</p>
        <p>You scored: {score}/8</p>
        {/* play again and quit options */}
        <div className="buttons">
          <button onClick={playAgain}>Restart</button>
          <button onClick={quit}>Quit</button>
        </div>
      </div>
    </div>
  );
};

export default UserWon;
