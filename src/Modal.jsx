import React from "react";
import { sellData } from "./sellcard";

const Modal = ({ active, setActive }) => {
  let sellHtml = "";
  for (let i in sellData) {
    sellHtml += `
    <div className="sell__logo">
        <img src="${sellData[i].img}" />
    </div>
    <div className="sell__text">
        <p>${sellData[i].text}</p>
    </div>`;
  }
  return (
    <>
      {" "}
      <div
        className={active ? "modal modal__active" : "modal"}
        onClick={() => setActive(false)}
      >
        {active && (
          <div
            className={
              active ? "modal__cont modal__cont__active" : "modal__cont"
            }
            onClick={(e) => e.stopPropagation()}
          >
            {sellHtml}
            <div>vefe</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
