import React, {useEffect, useState} from 'react';
import styles from './Form.module.css';
import {Backdrop} from '../../Utils/Backdrop/Backdrop';
import {ModalTimer} from '../ModalTimer/ModalTimer';

const Form = ({calendar, questName, onChange, changeCalendar}) =>{

const [time, setTime] = useState('')
const [modalTimerToggle, setModalTimerToggle]=useState(false);

// useEffect(()=>{
//   setTime(new Date().toUTCString())
// },[])
const handlerTimerToggle=()=>{
  setModalTimerToggle(!modalTimerToggle)
}

const handlerTimer=(e)=>{
  setTime(e.target.value)
  console.log(e.target)
}

  return(
    <>
    {modalTimerToggle ? <Backdrop><ModalTimer setTime={handlerTimer} onClose={setModalTimerToggle} /></Backdrop> : null}
    <div className={styles.card_form}>
        <label className={styles.card_middle} htmlFor="create new quest">
          <p className={styles.card_title}>CREATE NEW QUEST</p>
          <input
            className={styles.card_task}
            type="text"
            value={questName}
            onChange={onChange}
          />
        </label>
        <p className={styles.card_time}>
          {time}{" "}
          <button type="button" className={styles.card_button} onClick={handlerTimerToggle}>
            <svg
              className={styles.calendar_icon}
              viewBox="0 0 27 32"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.143 14.4h-3.048v3.2h3.048v-3.2zM15.238 14.4h-3.048v3.2h3.048v-3.2zM21.333 14.4h-3.048v3.2h3.048v-3.2zM24.381 3.2h-1.524v-3.2h-3.048v3.2h-12.191v-3.2h-3.048v3.2h-1.524c-1.691 0-3.032 1.44-3.032 3.2l-0.015 22.4c0 1.76 1.356 3.2 3.048 3.2h21.333c1.676 0 3.048-1.44 3.048-3.2v-22.4c0-1.76-1.371-3.2-3.048-3.2zM24.381 28.8h-21.333v-17.6h21.333v17.6z"></path>
            </svg>
          </button>
        </p>
      </div>
      </>
  )
}

export {Form}