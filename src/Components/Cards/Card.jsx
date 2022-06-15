import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { ModalLevel } from "./ModalLevel/ModalLevel";
import { ModalActivity } from "./ModalActivity/ModalActivity";
import { Level } from "./Level/Level";
import { Form } from "./Form/Form";
import { Activities } from "./Activities/Activities";
import Notiflix from "notiflix";

const setWeekDay = (selectedDay) => {
  if (selectedDay === "1") {
    return "Monday";
  } else if (selectedDay === "2") {
    return "Tuesday";
  } else if (selectedDay === "3") {
    return "Wednesday";
  } else if (selectedDay === "4") {
    return "Thursday";
  } else if (selectedDay === "5") {
    return "Friday";
  } else if (selectedDay === "6") {
    return "Saturday";
  } else if (selectedDay === "0") {
    return "Sunday";
  } else {
    console.log(`in setWeekDay func`);
  }
};

const setDay = (now, selectedDay) => {
  if (now === selectedDay) {
    return "Today";
  } else if (Number(now) + 1 === Number(selectedDay)) {
    return "Tomorrow";
  } else {
    console.log(`in setDay func `, setWeekDay(selectedDay.toString()));
    return setWeekDay(selectedDay.toString());
  }
};

const Card = ({ newCard }) => {
  Notiflix.Notify.init({ timeout: 6000 });
  const [taskName, setTaskName] = useState("");
  const [calendar, setCalendar] = useState("Today");
  const [level, setLevel] = useState("Normal");
  const [activity, setActivity] = useState("STUFF");
  const [levelToggle, setLevelToggle] = useState(false);
  const [activityToggle, setActivityToggle] = useState(false);
  const [createMode, setCreateMode] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [cardType, setCardType] = useState("quest");

  useEffect(() => {
    if (!newCard) {
      return;
    }
    setCardType(newCard);
    return;
  }, [newCard]);

  const handlerLevelToggle = () => {
    setLevelToggle(!levelToggle);
  };
  const handlerActivityToggle = () => {
    setActivityToggle(!activityToggle);
  };

  const handlerCreate = () => {
    if (calendar === "Today" && cardType === "quest") {
      return Notiflix.Notify.info(
        `Select date in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(2)
          .toLocaleString()}`,
      );
    } else if (calendar === "Today" && cardType === "challange") {
      return Notiflix.Notify.info(
        `Select date in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(7)
          .toLocaleString()}`,
      );
    } else if (!taskName) {
      return Notiflix.Notify.info(
        `Enter ${cardType} name`,
      );
    }
    setCreateMode(!createMode);
  };
  const handlerDelete = () => {
    setIsDeleted(true);
  };

  const handlerChangeLevel = (e) => {
    setLevel(e.target.value);
    handlerLevelToggle();
  };
  const handlerChangeCalendar = ([date]) => {
    if (!date && cardType === "quest") {
      return Notiflix.Notify.failure(
        `Ensure, that the time you have chosen is in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(2)
          .toLocaleString()}`,
      );
    } else if (!date && cardType === "challange") {
      return Notiflix.Notify.failure(
        `Ensure, that the time you have chosen is in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(7)
          .toLocaleString()}`,
      );
    }
    const now = new Date().getDay();
    const future = date.getDay();
    const selectedDay = setDay(now, future);
    
    const selectedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    setCalendar(`${selectedDay}, ${selectedTime}`);
  };
  const handlerChangeActivity = (e) => {
    setActivity(e.target.value);
    handlerActivityToggle();
  };

  const handlerInput = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className={styles.card}>
      {levelToggle ? <ModalLevel onClick={handlerChangeLevel} /> : null}

      <Level level={level} onClick={handlerLevelToggle} />

      <Form
        calendar={calendar}
        taskName={taskName}
        onChange={handlerInput}
        changeCalendar={handlerChangeCalendar}
        cardType={cardType}
      />

      {activityToggle ? (
        <ModalActivity onClick={handlerChangeActivity} />
      ) : null}

      <Activities
        activity={activity}
        onClick={handlerActivityToggle}
        onCreate={handlerCreate}
        onDelete={handlerDelete}
        cardType={cardType}
      />
    </div>
  );
};

export { Card };
