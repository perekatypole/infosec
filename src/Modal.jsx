import React from 'react'

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal__active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__cont" onClick={(e) => e.stopPropagation()}></div>
        </div>
    )
}

export default Modal