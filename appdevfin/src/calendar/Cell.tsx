import { useState } from "react";


function Cell({children, style, onClick = false} : {children?:any, style?: any, onClick?:any}) {
    const main = {background: "white"}
    let hover = {background: "oklch(96.7% 0.003 264.542)"}
    
    const [color, setColor] = useState(main)

    if(onClick == false) {
        hover = {background: "white"}
    }
    
    return(
        <div onMouseEnter={() => setColor(hover)} onMouseLeave={() => setColor(main)} onClick = {onClick} style={Object.assign({height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e7eb"}, style, color)}>{children}</div>
    )
}

export default Cell;