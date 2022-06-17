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

const setDay = (now, selectedDay) => {
  if (now === selectedDay) {
    return "Today";
  } else {
    return "Tomorrow";
  }
};

const CardQuest = () => {
  Notiflix.Notify.init({ timeout: 6000 });
  
  // STORE

  const [taskName, setTaskName] = useState("");
  const [calendar, setCalendar] = useState("Today");
  const [level, setLevel] = useState("Normal");
  const [activity, setActivity] = useState("STUFF");
  
  // LOCAL STATE

  const [levelToggle, setLevelToggle] = useState(false);
  const [activityToggle, setActivityToggle] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const [updateMode, setUpdateMode] = useState(true);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [modalTimerToggle, setModalTimerToggle] = useState(false);

  const handlerTimerToggle = () => {
    setModalTimerToggle(!modalTimerToggle);
  };

  const handlerDelete = () => {
    setDeleteToggle(!deleteToggle);
  };

  const handlerCancel = () => {
    setDeleteToggle(false);
  };

  const handlerEndUpdate =()=>{
    setUpdateMode(false)
  }

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
    } else if (!taskName) {
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
            cardType='quest'
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

      <Form
        calendar={calendar}
        taskName={taskName}
        onChange={handlerInput}
        openModal={handlerTimerToggle}
        cardType="quest"
        createMode={createMode}
        updateMode={updateMode}
      />

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


export default { CardQuest }
