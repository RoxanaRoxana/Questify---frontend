import React, { useState, useEffect } from "react";
import styles from "./CardQuest.module.css";
import { ModalLevel } from "./ModalLevel/ModalLevel";
import { ModalActivity } from "./ModalActivity/ModalActivity";
import { Level } from "./Level/Level";
import { Form } from "./Form/Form";
import { Activities } from "./Activities/Activities";
import Notiflix from "notiflix";
import { Backdrop } from "../Utils/Backdrop/Backdrop";
import { AskQuestion } from "../Utils/AskQuestion/AskQuestion";
import { ModalTimer } from "./ModalTimer/ModalTimer";
import { Info } from "./Info/Info";

const setDay = (now, selectedDay) => {
  if (now === selectedDay) {
    return "Today";
  } else {
    return "Tomorrow";
  }
};

const setMonth = (monthNumber) => {
  if(monthNumber === 0) {
    return 'January'
  } else if (monthNumber === 1) {
    return 'February'
  } else if (monthNumber === 2) {
    return 'March'
  } else if (monthNumber === 3) {
    return 'April'
  } else if (monthNumber === 4) {
    return 'May'
  } else if (monthNumber === 5) {
    return 'June'
  } else if (monthNumber === 6) {
    return 'July'
  } else if (monthNumber === 7) {
    return 'August'
  } else if (monthNumber === 8) {
    return 'September'
  } else if (monthNumber === 9) {
    return 'October'
  } else if (monthNumber === 10) {
    return 'November'
  } else {
    return 'December'
  }
}

const CardQuest = ({ onCreate }) => {
  Notiflix.Notify.init({ timeout: 6000 });

  // STORE

  const [title, setTitle] = useState("");
  const [calendar, setCalendar] = useState("Today");
  const [level, setLevel] = useState("Normal");
  const [activity, setActivity] = useState("STUFF");
  const [doneDate, setDoneDate] = useState("no date");

  // LOCAL STATE

  const [levelToggle, setLevelToggle] = useState(false);
  const [activityToggle, setActivityToggle] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [modalTimerToggle, setModalTimerToggle] = useState(false);
  const [updatedTime, setUpdatedTime] = useState('');

  const handlerTimerToggle = () => {
    setModalTimerToggle(!modalTimerToggle);
  };

  const handlerDelete = () => {
    setDeleteToggle(!deleteToggle);
  };

  const handlerCancel = () => {
    setDeleteToggle(false);
  };

  const handlerStartUpdate = (e) => {
    if (
      e.target.nodeName !== "path"
       && e.target.nodeName !== "svg" &&
      e.target.nodeName !== "BUTTON"
      ) {
      setUpdateMode(true);
    } else {
    }
  };

  const handlerEndUpdate = (e) => {
    setUpdateMode(false);
  };

  const handlerIsTomorrow = () => {
    const check = calendar.split(",").includes("Tomorrow");
    console.log(check);
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

  const handlerCreate = () => {
    if (calendar === "Today") {
      return Notiflix.Notify.info(
        `Select date in range:
         ${new Date().toLocaleString()} to ${new Date()
          .fp_incr(2)
          .toLocaleString()}`,
      );
    } else if (!title) {
      return Notiflix.Notify.info(`Enter quest name`);
    }
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
          .toLocaleString()}`,
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
    const timeMonth=date.getMonth()
    const timeDay=date.getDate()
    const timeString=`${setMonth(timeMonth)} ${timeDay}, ${selectedTime}`;
    setDoneDate(timeString);
  };

  const handlerChangeActivity = (e) => {
    setActivity(e.target.value);
    handlerActivityToggle();
  };

  const handlerInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div
      className={!createMode && !updateMode ? `${styles.card} ${styles.pointer_on}` : styles.card}
      onClick={!createMode && !updateMode ? handlerStartUpdate : null}>
      {deleteToggle ? (
        <Backdrop>
          <AskQuestion
            question="Delete this Quest?"
            onApproval={handlerDelete}
            onCancel={handlerCancel}
          />
        </Backdrop>
      ) : null}
      {modalTimerToggle ? (
        <Backdrop>
          <ModalTimer
            setTime={handlerChangeCalendar}
            onClose={handlerTimerToggle}
            cardType="quest"
          />
        </Backdrop>
      ) : null}
      {levelToggle ? <ModalLevel onClick={handlerChangeLevel} /> : null}

      <Level
        level={level}
        onClick={handlerLevelToggle}
        createMode={createMode}
        updateMode={updateMode}
      />

      <div>
        {createMode || updateMode ? (<Form
          calendar={calendar}
          title={title}
          onChange={handlerInput}
          openModal={handlerTimerToggle}
          cardType="quest"
          updateMode={updateMode}
        />) : (
        <Info calendar={calendar} title={title} updatedTime={updatedTime} cardType='quest' />
      )}

        {activityToggle ? (
          <ModalActivity onClick={handlerChangeActivity} />
        ) : null}

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
  );
};

export { CardQuest };
