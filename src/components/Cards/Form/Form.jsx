import React, { useEffect, useState } from "react";
import stylesQuest from "./Form.module.css";
import { Info } from "../Info/Info";

const Form = ({
  calendar,
  taskName,
  onChange,
  openModal,
  cardType,
  createMode,
  updateMode,
}) => {
  return (
    <>
      {createMode || updateMode ? (
        <div className={stylesQuest.card_form}>
          <label
            className={stylesQuest.card_middle}
            htmlFor={
              cardType === "quest"
                ? updateMode
                  ? "edit quest"
                  : "create new quest"
                : updateMode
                ? "edit challenge"
                : "create new challenge"
            }>
            <p className={stylesQuest.card_title}>
              {cardType === "quest"
                ? updateMode
                  ? "EDIT QUEST"
                  : "CREATE NEW QUEST"
                : updateMode
                ? "EDIT CHALLENGE"
                : "CREATE NEW CHALLENGE"}
            </p>
            <input
              className={stylesQuest.card_task}
              type="text"
              value={taskName}
              onChange={onChange}
              maxLength={40}
            />
          </label>
          <p className={stylesQuest.card_time}>
            {cardType === "quest" ? `${calendar} ` : `by ${calendar} `}
            <button
              type="button"
              className={stylesQuest.card_button}
              onClick={openModal}>
              <svg
                className={stylesQuest.calendar_icon}
                viewBox="0 0 27 32"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.143 14.4h-3.048v3.2h3.048v-3.2zM15.238 14.4h-3.048v3.2h3.048v-3.2zM21.333 14.4h-3.048v3.2h3.048v-3.2zM24.381 3.2h-1.524v-3.2h-3.048v3.2h-12.191v-3.2h-3.048v3.2h-1.524c-1.691 0-3.032 1.44-3.032 3.2l-0.015 22.4c0 1.76 1.356 3.2 3.048 3.2h21.333c1.676 0 3.048-1.44 3.048-3.2v-22.4c0-1.76-1.371-3.2-3.048-3.2zM24.381 28.8h-21.333v-17.6h21.333v17.6z"></path>
              </svg>
            </button>
          </p>
        </div>
      ) : (
        <Info calendar={calendar} taskName={taskName} cardType={cardType} />
      )}
    </>
  );
};

export { Form };
