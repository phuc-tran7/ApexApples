import { useState } from "react";

// May need to take value (the current date) as an argument, to be used for querying for the schedule information when a date is clicked
function Cell({children, style, onClick = false} : {children?:any, style?: any, onClick?:any}) {
    const main = {background: "white"}
    let hover = {background: "oklch(96.7% 0.003 264.542)"}
    
    const [color, setColor] = useState(main)

    if(onClick == false) {
        hover = {background: "white"}
    }
    
    return(
        <div onMouseEnter={() => setColor(hover)} onMouseLeave={() => setColor(main)} onClick = {onClick} 
        style={Object.assign({height: "10vh", display: "flex", alignItems: "center", justifyContent: "center", 
        border: "1px solid #e5e7eb"}, style, color)}>
            {children}
        </div>
    )
}

export default Cell;