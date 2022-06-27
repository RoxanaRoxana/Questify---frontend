import React, { useState, useEffect } from "react";
import { CardQuest } from "../../components/Cards/CardQuest";
import styles from "./DoneContainer.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getAllCards } from "../../services/api";
import Challange from "../../components/Cards/Challange/Challange";

const DoneContainer = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const { cardsList } = useSelector((state) => state.cards);
  const { accessToken } = useSelector((state) => state.users);
  let doneCards = [];

  useEffect(() => {
    dispatch(getAllCards(accessToken));
  }, [dispatch, accessToken]);

  const handleClick = () => {
    setIsActive(!isActive);
    setShow(!show);
  };

  let errorMessage;
  if (cardsList !== null && !cardsList.hasOwnProperty("status")) {
    errorMessage = "No cards in database";
  } else {
    errorMessage = "Your session has expired";
  }

  if (cardsList === null) {
    return;
  } else {
    for (let card of cardsList.cards) {
      if (card.isCompleted === true) {
        doneCards.push(card);
      }
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.border_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Done</h1>
          </div>

          <span
            className={isActive ? [styles.activ_button] : [styles.button]}
            onClick={handleClick}
          ></span>
          <div className={styles.line}></div>
        </div>
        {show && (
          <div className={styles.card_container}>
            {cardsList && cardsList.status === undefined ? (
              <ul className={styles.list}>
                {doneCards.map(
                  ({
                    _id,
                    title,
                    difficulty,
                    category,
                    date,
                    time,
                    type,
                    owner,
                  }) => (
                    <li key={_id}>
             {type === "challenge" ? (
                    <Challange
                      cardId={_id}
                      cardTitle={title}
                      cardDifficulty={difficulty}
                      cardCategory={category}
                      cardDate={date}
                      cardTime={time}
                      cardType={type}
                      owner={owner}
                    />
                  ) : (
                    <CardQuest
                      cardId={_id}
                      cardTitle={title}
                      cardDifficulty={difficulty}
                      cardCategory={category}
                      cardDate={date}
                      cardTime={time}
                      cardType={type}
                      owner={owner}
                    />
                  )}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <h2>{errorMessage}</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DoneContainer;
