import React, { useEffect } from "react";
import { CardQuest } from "../../components/Cards/CardQuest";
import styles from "./TomorrowContainer.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getAllCards } from "../../services/api";

const TomorrowContainer = () => {
  const { cardsList } = useSelector((state) => state.cards);
  //const cards = useSelector((state) => state.cards.cardsList.cards);
  const { accessToken } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const date = new Date();
  const tomorrow = date.setDate(new Date(date).getDate() + 1);
  const dayOfMonth = new Date(tomorrow).getDate();
  let dayOfMonthWithZero = 0;
  let tomorrowCards = [];

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
    console.log("lol");
  } else {
    for (let card of cardsList.cards) {
      if (card.date.slice(8) === dayOfMonthWithZero.toString()) {
        tomorrowCards.push(card);
      }
    }
  }

  console.log(tomorrowCards);

  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Tomorrow</h1>
      <div className={styles.cart_container}>
        {cardsList && cardsList.status === undefined ? (
          <ul>
            {tomorrowCards.map(
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
                  <CardQuest
                    cardId={_id}
                    title={title}
                    difficulty={difficulty}
                    category={category}
                    date={date}
                    time={time}
                    type={type}
                    owner={owner}
                  />
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

export default TomorrowContainer;
