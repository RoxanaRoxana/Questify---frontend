import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { ModalLevel } from "./ModalLevel/ModalLevel";
import { ModalActivity } from "./ModalActivity/ModalActivity";
import { Level } from "./Level/Level";
import { Form } from "./Form/Form";
import { Activities } from "./Activities/Activities";

const Card = () => {
  const [questName, setQuestName] = useState("");
  const [calendar, setCalendar] = useState("Today");
  const [level, setLevel] = useState("Normal");
  const [activity, setActivity] = useState("STUFF");
  const [levelToggle, setLevelToggle] = useState(false);
  const [activityToggle, setActivityToggle] = useState(false);
  const [createMode, setCreateMode] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (isDeleted) {
      return;
    };
  }, [isDeleted]);

  const handlerLevelToggle = () => {
    setLevelToggle(!levelToggle);
  };
  const handlerActivityToggle = () => {
    setActivityToggle(!activityToggle);
  };

  const handlerCreate = () => {
    setCreateMode(!createMode);
  };
  const handlerDelete = () => {
    setIsDeleted(true);
  };

  const handlerChangeLevel = (e) => {
    setLevel(e.target.value);
    handlerLevelToggle();
  };
  const handlerChangeCalendar=(e)=>{
    setCalendar(e.target.value)
  }
  const handlerChangeActivity = (e) => {
    setActivity(e.target.value);
    handlerActivityToggle();
  };

  const handlerInput = (e) => {
    setQuestName(e.target.value);
  };

  return (
    <div className={styles.card}>
      {levelToggle ? <ModalLevel onClick={handlerChangeLevel} /> : null}

      <Level level={level} onClick={handlerLevelToggle} />

      <Form calendar={calendar} questName={questName} onChange={handlerInput} changeCalendar={handlerChangeCalendar} />

      {activityToggle ? (
        <ModalActivity onClick={handlerChangeActivity} />
      ) : null}

      <Activities
        activity={activity}
        onClick={handlerActivityToggle}
        onCreate={handlerCreate}
        onDelete={handlerDelete}
      />
    </div>
  );
};

export default Card;
