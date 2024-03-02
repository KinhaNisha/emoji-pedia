import React, { useState } from 'react';
import EmojiScreen from './Emoji';
import Data from './EmojisData';

const App = () => {
  const [data, setData] = useState(Data);
  // console.log(data)
  return (
    <div className="container">
        <EmojiScreen data={data}/>
    </div>
  );
};

export default App;

