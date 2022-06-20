import { useState } from "react";
import { Level } from "../Level/Level";
import { ModalLevel } from "../ModalLevel/ModalLevel";
import { Form } from "../Form/Form";
import { ModalTimer } from "../ModalTimer/ModalTimer";
import { ModalActivity } from "../ModalActivity/ModalActivity";
import { Activities } from "../Activities/Activities";
import styles from "./Challange.module.css";
import { Animated } from "react-animated-css";
import CompleteTask from "../CompleteTask/CompleteTask";
import completeStyles from "../../NewQuest/NewQuest.module.css";

function Challange(props) {
  const [questName, setQuestName] = useState("");
  const [calendar, setCalendar] = useState("Today");
  const [level, setLevel] = useState("Normal");
  const [activity, setActivity] = useState("STUFF");
  const [levelToggle, setLevelToggle] = useState(false);
  const [activityToggle, setActivityToggle] = useState(false);
  const [createMode, setCreateMode] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCompleted, setCompleted] = useState(false);
  const [visable, setVisable] = useState(true);

  const handlerChangeLevel = (e) => {
    setLevel(e.target.value);
    handlerLevelToggle();
  };

  const handlerLevelToggle = () => {
    setLevelToggle(!levelToggle);
  };

  const completeQuest = () => {
    setVisable(false);
    setInterval(() => {
      setCompleted(true);
    }, 1000);
  };

  const handlerCreate = () => {
    setCreateMode(!createMode);
  };

  const handlerDelete = () => {
    setIsDeleted(true);
  };

  const handlerInput = (e) => {
    setQuestName(e.target.value);
  };

  const handlerChangeCalendar = (e) => {
    setCalendar(e.target.value);
  };

  const handlerChangeActivity = (e) => {
    setActivity(e.target.value);
    handlerActivityToggle();
  };

  const handlerActivityToggle = () => {
    setActivityToggle(!activityToggle);
  };

    return (
      <div>
        {!isCompleted && (
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={visable}
          >
            <div className={styles.card}>
              {levelToggle ? <ModalLevel onClick={handlerChangeLevel} /> : null}

              <Level
                type="Challange"
                level={level}
                onClick={handlerLevelToggle}
                endQuest={completeQuest}
              />

              <Form
                type="Challange"
                calendar={calendar}
                questName={questName}
                onChange={handlerInput}
                changeCalendar={handlerChangeCalendar}
              />

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
          </Animated>
        )}
        {isCompleted && (
          <Animated>
            <div
              style={{ background: '#15395A' }}
              className={completeStyles.cardComplete}
            >
              <CompleteTask type="Challange"></CompleteTask>
            </div>
          </Animated>
        )}
      </div>
    );
}

export default Challange;
