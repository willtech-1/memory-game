import React, { useState } from "react";
//children components
import images from "./imageData";
import ImageCards from "./Components/ImageCards";
import TimeCounter from "./Components/TimeCounter";
import Help from "./Components/Help";
import "./App.css";

function App() {
  //images data state
  const [imageCards, setImageCards] = useState(images);
  // firstClickiously clicked image state initialized to a negative number because user haven't clicked nothing
  const [firstClick, setFirstClick] = useState(-1);
  // count score
  const [score, setScore] = useState(0);

  // handleClick function which takes an id index as parameter
  function handleClick(index) {
    // if we havent had image card clicked
    if (firstClick === -1) {
      // then show image[index] that is clicked(status to active (css));
      imageCards[index].status = "active";
      // add the clicked image to the array using spread operator
      setImageCards([...imageCards]);
      // add the first click image card index
      setFirstClick(index);
    } else {
      // if the above statement is false(we previously clicked component)
      // compare the first clicked image index with the second image
      compare(index);
    }
  }

  // comparing image cards using IDs
  const compare = (secondClick) => {
    // if currently clicked on image ID matches the previously clicked image
    if (imageCards[secondClick].id === imageCards[firstClick].id) {
      // console.log(imageCards[secondClick].id)
      // console.log(imageCards[firstClick].id)
      // add 1 to the score
      setScore((prevScore) => {
        return prevScore + 1;
      });
      // if they match set the status on the className to "yes"
      imageCards[firstClick].status = "yes";
      imageCards[secondClick].status = "yes";
      // console.log(imageCards[secondClick])
      // add image cards back the the array using spread operator
      setImageCards([...imageCards]);
      console.log([...imageCards]);
      // setFistClick to nothing/default
      setFirstClick(-1);
    } else {
      // if the cards are not matching
      imageCards[secondClick].status = "no";
      imageCards[firstClick].status = "no";
      // add image cards the array using spread operator
      setImageCards([...imageCards]);
      // when image is flipped settimeout to half a second if first click and second click do not match
      setTimeout(() => {
        // set both images back to display nothing after 500 milliseconds
        imageCards[secondClick].status = "";
        imageCards[firstClick].status = "";
        // add image cards back the array using spread operator
        setImageCards([...imageCards]);
        // setFistClick to nothing/default
        setFirstClick(-1);
        // half a second setTimeout
      }, 500);
    }
  };

  return (
    <>
      <h2 className="heading">Memory Game</h2>
      {/* help component with game instructions*/}
      <Help />
      {/* display the score */}
      <h4 className="score">Score: {score}/8</h4>

      {/* render time counter component */}
      <TimeCounter score={score} setScore={setScore} />

      <div className="container">
        {/* render image cards component */}
        {imageCards.map((data, index) => (
          <ImageCards
            key={index}
            data={data}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
      
    </>
  );
}

export default App;
