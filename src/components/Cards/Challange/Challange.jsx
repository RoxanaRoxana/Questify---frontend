import React, { useState, useEffect } from "react";
import styles from "./Challange.module.css";
import { ModalLevel } from "../ModalLevel/ModalLevel";
import { ModalActivity } from "../ModalActivity/ModalActivity";
import { Level } from "../Level/Level";
import { Form } from "../Form/Form";
import { Activities } from "../Activities/Activities";
import Notiflix from "notiflix";
import { Backdrop } from "../../Utils/Backdrop/Backdrop";
import { AskQuestion } from "../../Utils/AskQuestion/AskQuestion";
import { ModalTimer } from "../ModalTimer/ModalTimer";
import { Info } from "../Info/Info";
import CompleteTask from "../CompleteTask/CompleteTask";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import { editCard } from "../../../services/api";

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

const setMonth = (monthNumber) => {
  if (monthNumber === 0) {
    return "January";
  } else if (monthNumber === 1) {
    return "February";
  } else if (monthNumber === 2) {
    return "March";
  } else if (monthNumber === 3) {
    return "April";
  } else if (monthNumber === 4) {
    return "May";
  } else if (monthNumber === 5) {
    return "June";
  } else if (monthNumber === 6) {
    return "July";
  } else if (monthNumber === 7) {
    return "August";
  } else if (monthNumber === 8) {
    return "September";
  } else if (monthNumber === 9) {
    return "October";
  } else if (monthNumber === 10) {
    return "November";
  } else {
    return "December";
  }
};

const Challange = ({
  onCreate = false,
  cardId,
  cardTitle,
  cardDifficulty,
  cardCategory,
  cardDate,
  cardTime,
  cardType,
}) => {
  // STORE

  const [title, setTitle] = useState(cardTitle);
  const [calendar, setCalendar] = useState("Today");
  const [level, setLevel] = useState(cardDifficulty);
  const [activity, setActivity] = useState(cardCategory);
  const [doneDate, setDoneDate] = useState("no date");
  const { accessToken } = useSelector((state) => state.users);
  const { loading: isCardLoading, error: cardError } = useSelector(
    (state) => state.cards
  );
  const dispatch = useDispatch();

  // LOCAL STATE

  const [levelToggle, setLevelToggle] = useState(false);
  const [activityToggle, setActivityToggle] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [modalTimerToggle, setModalTimerToggle] = useState(false);
  const [updatedTime, setUpdatedTime] = useState("");
  const [isCompleted, setCompleted] = useState(false);
  const [visable, setVisable] = useState(true);
  const [hourForBackend, setHourForBackend] = useState("");
  const [dateForBackend, setDateForBackend] = useState("");

  const timeAndDateFromCard = `${cardDate} ${cardTime}:00`;
  const timeForFront = new Date(timeAndDateFromCard);

  const handlerTimerToggle = () => {
    setModalTimerToggle(!modalTimerToggle);
  };

  const completeQuest = () => {
    setVisable(false);
    // let type = cardsList.cards[cardsList.cards.length - 1].type;
    setInterval(() => {
      setCompleted(true);
    }, 1000);
  };

  const handlerDelete = () => {
    setDeleteToggle(!deleteToggle);
  };

  const handlerCancel = () => {
    setDeleteToggle(false);
  };

  const handlerStartUpdate = (e) => {
    if (
      e.target.nodeName !== "path" &&
      e.target.nodeName !== "svg" &&
      e.target.nodeName !== "BUTTON"
    ) {
      setUpdateMode(true);
    } else {
    }
  };

  const setDefaultCardData = () => {
    setTitle(cardTitle);
    setLevel(cardDifficulty);
    setActivity(cardCategory);
    handlerChangeCalendar([timeForFront]);
  };

  const handlerEndUpdate = (e) => {
    setDefaultCardData();
    setUpdateMode(false);
  };

  const handlerIsTomorrow = () => {
    const check = calendar.split(",").includes("Tomorrow");
  };

  useEffect(() => {
    if (calendar === "Today") {
      return;
    }
    handlerIsTomorrow();
  }, [calendar]);

  useEffect(() => {
    if (calendar === "Today") {
      return;
    }
    handlerChangeCalendar([updatedTime]);
  });

  const handlerLevelToggle = () => {
    setLevelToggle(!levelToggle);
  };

  const handlerActivityToggle = () => {
    setActivityToggle(!activityToggle);
  };

  const onMouseLeaveLevel = () => {
    handlerLevelToggle();
  };
  const onMouseLeaveActivity = () => {
    handlerActivityToggle();
  };

  const handlerCreate = () => {
    if (calendar === "Today") {
      return Notiflix.Notify.info(
        `Select date in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(2)
          .toLocaleString()}`
      );
    } else if (!title) {
      return Notiflix.Notify.info(`Enter quest name`);
    }
    const cardData = {
      title: title,
      difficulty: level,
      category: activity,
      date: dateForBackend,
      time: hourForBackend,
      type: cardType,
    };

    dispatch(editCard({ accessToken, cardData, cardId }));

    setCreateMode(false);
    setUpdateMode(false);
  };

  const handlerChangeLevel = (e) => {
    setLevel(e.target.value);
    handlerLevelToggle();
  };

  const handlerChangeCalendar = ([date]) => {
    if (!date) {
      return Notiflix.Notify.failure(
        `Ensure, that the time you have chosen is in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(2)
          .toLocaleString()}`
      );
    }
    const now = new Date().getDay();
    const future = date.getDay();
    const selectedDay = setDay(now, future);
    const selectedTime = `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    setCalendar(`${selectedDay}, ${selectedTime}`);
    // Updated time for auto-rendering actual time on calendar
    setUpdatedTime(date);
    // Estimated time string to display on "done" cards
    const timeMonth = date.getMonth();
    const timeDay = date.getDate();
    const timeString = `${setMonth(timeMonth)} ${timeDay}, ${selectedTime}`;
    setDoneDate(timeString);
    setHourForBackend(selectedTime);
    setDateForBackend(new Date(date).toISOString().slice(0, 10));
  };

  useEffect(() => {
    handlerChangeCalendar([timeForFront]);
  }, []);

  const handlerChangeActivity = (e) => {
    setActivity(e.target.value);
    handlerActivityToggle();
  };

  const handlerInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      {!isCompleted && (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={visable}
        >
          <div
            className={
              !createMode && !updateMode
                ? `${styles.card} ${styles.pointer_on}`
                : styles.card
            }
            onClick={!createMode && !updateMode ? handlerStartUpdate : null}
          >
            <Backdrop toggle={deleteToggle}>
              <AskQuestion
                question="Delete this Quest?"
                onApproval={handlerDelete}
                onCancel={handlerCancel}
                cardId={cardId}
              />
            </Backdrop>
            <Backdrop toggle={modalTimerToggle}>
              <ModalTimer
                setTime={handlerChangeCalendar}
                onClose={handlerTimerToggle}
                cardType="challenge"
              />
            </Backdrop>
            <ModalLevel
              levelToggle={levelToggle}
              onMouseLeave={onMouseLeaveLevel}
              onClick={handlerChangeLevel}
            />

            <Level
              level={level}
              onClick={handlerLevelToggle}
              createMode={createMode}
              updateMode={updateMode}
              endQuest={completeQuest}
              type={cardType}
            />

            <div>
              {createMode || updateMode ? (
                <Form
                  calendar={calendar}
                  title={title}
                  onChange={handlerInput}
                  openModal={handlerTimerToggle}
                  cardType={cardType}
                  updateMode={updateMode}
                />
              ) : (
                <Info
                  calendar={calendar}
                  title={title}
                  updatedTime={updatedTime}
                  cardType={cardType}
                />
              )}

              <ModalActivity
                activityToggle={activityToggle}
                onMouseLeave={onMouseLeaveActivity}
                onClick={handlerChangeActivity}
              />

              <Activities
                activity={activity}
                onClick={handlerActivityToggle}
                onCreate={handlerCreate}
                onDelete={handlerDelete}
                onAccept={handlerEndUpdate}
                createMode={createMode}
                updateMode={updateMode}
              />
            </div>
          </div>
        </Animated>
      )}
      {isCompleted && (
        <Animated>
          <div className={styles.cardComplete}>
            <CompleteTask title={title} type={cardType}></CompleteTask>
          </div>
        </Animated>
      )}
    </div>
  );
};

export default Challange;
