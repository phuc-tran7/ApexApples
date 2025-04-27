function Modal({children, open, onClose} : {children?:any, open:boolean, onClose:any}) { 
    return (
        <div style={{height: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center",  
            visibility: open ? "visible"  : "invisible" as React.CSSProperties['visibility']}} 
            onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} style={{scale: open ? "100% 100%"  : "110% 110%" as React.CSSProperties['scale'], 
                opacity: open ? "100%"  : "0" as React.CSSProperties['opacity']}}>
                <button onClick = {onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;