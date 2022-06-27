import React, { useEffect } from "react";
import styles from "./TodayContainer.module.css";
import { CardQuest } from "../../components/Cards/CardQuest";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getAllCards } from "../../services/api";
import Challange from "../../components/Cards/Challange/Challange";

const TodayContainer = () => {
  const { accessToken } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { cardsList } = useSelector((state) => state.cards);
  const date = new Date();
  const today = date.setDate(new Date(date).getDate());
  const dayOfMonth = new Date(today).getDate();
  let dayOfMonthWithZero = 0;
  let todayCards = [];

  useEffect(() => {
    dispatch(getAllCards(accessToken));
  }, [dispatch, accessToken]);

  let errorMessage;
  if (cardsList !== null && !cardsList.hasOwnProperty("status")) {
    errorMessage = "No cards in database";
  } else {
    errorMessage = "Your session has expired";
  }

  if (dayOfMonth >= 1 && dayOfMonth <= 9) {
    dayOfMonthWithZero = "0" + dayOfMonth;
  } else if (dayOfMonth >= 10 && dayOfMonth <= 31) {
    dayOfMonthWithZero = dayOfMonth;
  }

  if (cardsList === null) {
    void 0;
  } else {
    for (let card of cardsList.cards) {
      if (card.date.slice(8) === dayOfMonthWithZero.toString()) {
        todayCards.push(card);
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Today</h1>
      <div className={styles.cart_container}>
        {cardsList && !cardsList.status ? (
          <ul>
            {todayCards.map(
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
                  {type === "Challenge" ? (
                    <Challange
                      cardId={_id}
                      title={title}
                      difficulty={difficulty}
                      category={category}
                      date={date}
                      time={time}
                      type={type}
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
    </div>
  );
};

export default TodayContainer;
