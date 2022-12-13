import React from "react";

const Help = () => {
  return (
    <div className="instruction-container">
      <h4>Memory game instructions</h4>
      <p>
        Find matching image cards. User can click on any "empty" card in those
        16 displayed on the screen. When empty card is clicked an image will
        show, then user has to click another card again, if the first image card
        the user clicked matches with the second image card the user scores one
        point and both image cards will be displayed on screen. However if not
        then the user will have to keep on checking to find eight cards that
        match.
      </p>
      <p>
        User has 20 seconds to find all image cards that match in order to win.
      </p>
    </div>
  );
};

export default Help;
