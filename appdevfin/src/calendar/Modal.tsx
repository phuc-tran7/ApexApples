function Modal({children, onClose} : {children?:any, onClose:any}) { 
    return (
        <div style={{position: "fixed", top: "45%", left: "50%", transform: "translate(-50%, -50%)", 
            height: "60vh", width: "45vw", display: "flex", alignItems: "center", justifyContent: "center",  
            border:"1px solid #e5e7eb", backgroundColor: "white"}} 
            onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} style={{display: "flex", flexDirection: "column",
                justifyContent: 'space-between', height: '100%', width: '100%', padding: '20px', boxSizing: 'border-box'
            }}
        >
                <h1 style={{alignItems: "center", justifyContent: "center", textAlign:"center"}}>{children}</h1>

                <button
                    onClick={onClose}
                    style={{padding: '10px 15px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer',
                    }}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;