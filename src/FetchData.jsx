import React from "react";


function Smile(props){
    return(
        <div className="container">
        <span className="img">{props.emoji}</span>
        <h1 className="name">{props.name}</h1>
        <p className="detail">{props.meaning}</p>
        </div>
    )
}

export default Smile;