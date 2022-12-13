import React from "react";

// accept components from parent component
const ImageCards = ({ data, index, handleClick }) => {
  // if image is clicked ? show the image (active class added from css)
  const imageColour = data.status ? " active " + data.status : "";
  return (
    // image clicked dynamic css if image is clicked ? show the image (active class added from css) if not empty
    <div
      className={"image-container" + imageColour}
      onClick={() => handleClick(index)}
    >
      {/* render images */}
      <img className="image" src={data.img} alt={data.id} />
    </div>
  );
};

export default ImageCards;
