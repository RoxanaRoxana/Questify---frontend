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

  let errorMessage;
  if (cardsList !== null && !cardsList.hasOwnProperty("status")) {
    errorMessage = "No cards in database";
  } else {
    errorMessage = "Your session has expired";
  }

  useEffect(() => {
    dispatch(getAllCards(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title_container}>Today</h1>
      <div className={styles.cart_container}>
        {cardsList && cardsList.status === undefined ? (
          <ul>
            {cardsList.cards.map(
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
                      title={title}
                      difficulty={difficulty}
                      category={category}
                      date={date}
                      time={time}
                      type={type}
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
