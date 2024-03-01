import React from 'react';
import emojiPedia from './emojis';
import Smile from './FetchData';
import Footer from './footer';

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
      <h1 className='header'>About Emojis: </h1>
      {emojiPedia.map(emoji)}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

