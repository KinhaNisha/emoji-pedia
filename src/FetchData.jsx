import React from "react";


function Smile(props){
    return(
        <div>
        <span>{props.emoji}</span>
        <h1>{props.name}</h1>
        <p>{props.meaning}</p>
        </div>
    )
}

export default Smile;