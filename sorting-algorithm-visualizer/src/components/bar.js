import React from "react";
import "../main.css"
import "../styles/bar.css"
function Bar(props)
{

    const barHeight = String((props.value / (props.length )) * 100) + "%"
    const barWidth = String(100 / props.length) + "%"
    const leftMarginPercentage = String((props.i) * (100 / props.length)) + "%"
  
return (
    <div className="bar" id = {props.id} style = {{
        height : barHeight,
        width : barWidth,
        marginLeft : leftMarginPercentage,
        backgroundColor : "black"
    }}>

    </div>
)
}

export default Bar;