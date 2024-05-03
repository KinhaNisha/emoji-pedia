import React, { useState } from "react";
import clickSound from './Sound/Click.wav';
import confetti from 'canvas-confetti'; // Make sure to install this package

function EmojiScreen({data}){
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const sound = new Audio(clickSound);

  const handleClick = (emojiName) => {
    setSelectedEmoji(emojiName);
    sound.play();
    triggerConfetti(); // This will trigger the confetti animation
  };

  
  // Define the triggerConfetti function here
  const triggerConfetti = () => {
    confetti({
      // particleCount: More particles for a fuller effect.
      particleCount: 500,
  
      // angle: Starting angle at 90 to burst upwards.
      angle: 120,
  
      // spread: A full 360 degrees to cover all directions.
      spread: 300,
  
      // startVelocity: How fast the particles start off. Adjust as needed for effect.
      startVelocity: 30,
  
      // gravity: Adjust the fall rate of the particles.
      gravity: 0.5,
  
      // colors: An array of color strings for the confetti particles.
      // Use the generateRandomColors function to set the colors property
      colors: generateRandomColors(),
  
      // shapes: Shapes of the confetti particles ('circle', 'square').
      shapes: getRandomShapes(),
  
      // scalar: Adjust the size of the confetti particles.
      scalar: 1,
  
      // origin: Where the confetti should burst from (0.5, 0.5) is the middle of the screen.
      origin: { x: 0.5, y: 0.5 }
    });
  };
/*
  const _triggerConfetti = () => {
    confetti({
      // particleCount: Number of confetti particles to be rendered.
      particleCount: 150,
  
      // angle: The angle in degrees at which the confetti will be spread.
      // 90 is straight up, with lower numbers spreading to the left and higher to the right.
      angle: 60,
  
      // spread: Defines the spread of the confetti arc.
      // A smaller number makes the arc narrower, and a larger number makes it wider.
      spread: 120,
  
      // startVelocity: The starting velocity of the confetti particles.
      // Higher numbers throw the confetti stronger, and lower numbers drop it more gently.
      startVelocity: 30,
  
      // gravity: The force of gravity on the confetti particles.
      // Higher numbers make the particles fall faster, and lower numbers make them float longer.
      gravity: 0.5,
  
      // colors: An array of color strings that determines the colors of the confetti particles.
      // You can add as many colors as you like in the array.
      colors: ['#bb0000', '#ffffff'],
  
      // shapes: An array defining the shape of the confetti particles.
      // 'circle' and 'square' are the typical shapes supported by most confetti libraries.
      shapes: ['circle'], 
  
      // scalar: A multiplier that changes the size of the confetti particles.
      // Values greater than 1 make the particles larger, and values less than 1 make them smaller.
      scalar: 1
    });
  };
  
*/


  // List of suggested confetti shapes
  const shapes = [
    "circle", "square", "triangle", "star", "heart", "diamond", "moon", "flower",
    "leaf", "butterfly", "spiral", "hexagon", "snowflake", "feather", "arrow",
    "music note", "paw print", "cross", "balloon", "cloud", "lightning bolt", "smiley face"
  ];

  // Function to randomly select 4 unique shapes from the list
  const getRandomShapes = () => {
    let result = [];
    let shapesCopy = [...shapes]; // Copy the shapes array to avoid mutating the original list
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * shapesCopy.length);
      result.push(shapesCopy[randomIndex]);
      shapesCopy.splice(randomIndex, 1); // Remove the selected item to avoid duplicates
    }
    return result;
  };


// Function to generate an array of 5 random hex colors
const generateRandomColors = () => {
  const randomColor = () => {
    // Generate a random hex color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Create an array of 5 random colors
  return Array.from({ length: 5 }, randomColor);
};

  const handleClose = () => {
    setSelectedEmoji(null);
    sound.play();
  };
  
  const handleOverlayClick = (e) => {
    // Close the card only if the overlay itself is clicked, not its children
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const stopPropagation = (e) => {
    // Prevent the click from propagating to the overlay
    e.stopPropagation();
  };

    // console.log(data);
    return (
      <div className="emoji-contaner">
        {data.map((item) => (
          <div key={item.id} className="emoji-item" onClick={() => handleClick(item)}>
            <p className="emoji-logo">{item.emoji}</p>
            <p className="emoji-name">{item.name}</p>
          </div>
        ))}

        {selectedEmoji && (
          <div className="overlay" onClick={handleOverlayClick}>
            <div className="card" onClick={stopPropagation}>
              <div className="card-header">
                <span className="close" onClick={handleClose}>&times;</span>
              </div>
              <div className="card-content">
                <p className="card-emoji">{selectedEmoji.emoji}</p>
                <div className="card-text">
                  <p className="card-fullname">{selectedEmoji.fullName}</p>
                  <p className="card-meaning">{selectedEmoji.meaning}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default EmojiScreen;