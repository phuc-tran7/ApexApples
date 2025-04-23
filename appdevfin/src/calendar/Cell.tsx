function Cell({children, style} : {children:any, style?: any}) {
    return(
        <div style={Object.assign({height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e7eb"}, style)}>{children}</div>
    )
}

export default Cell;