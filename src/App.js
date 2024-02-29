import React from 'react';
import emojiPedia from './emojis';
import Smile from './FetchData';

function emoji(emojiPedia){
  return(
    <div>
      <Smile 
        key = {emojiPedia.id}
        emoji = {emojiPedia.emoji}
        name = {emojiPedia.name}
        meaning = {emojiPedia.meaning}
      />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>About Emojis: </h1>
      {emojiPedia.map(emoji)}
    </div>
  );
};

export default App;

