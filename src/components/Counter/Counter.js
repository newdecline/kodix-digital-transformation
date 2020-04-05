import "./index.css";
import React, {useContext} from "react";
import {addNumber, startCounter, stopCounter, setInterval} from "../../actions/counterActions";
import {useInterval} from "../../hooks/useInterval";
import {CounterContext} from "../../contexts/counterContext";

export const Counter = () => {
  const {state, dispatch} = useContext(CounterContext);
  const {isStarted, counter, delay} = state;

  useInterval(() => dispatch(addNumber()), isStarted ? delay : null);

  const onStartCounter = () => {
    dispatch(startCounter());
  };

  const onEndCounter = () => {
    dispatch(stopCounter());
  };

  const onChangeInterval = e => {
    const value = parseInt(e.target.value) || 1000;
    dispatch(setInterval(value));
  };

  return <div className='app'>
    <div className='interval'>
      <input onChange={onChangeInterval} type="number" className="interval__input"/>
    </div>
    
    <div className="timer">
      <div className="counter">
        <span className="counter__title">Секундомер: </span>
        <span className="counter__value">{counter} сек</span>
      </div>
      <div className="buttons">
        <button className="buttons__btn" onClick={onStartCounter}>{isStarted ? 'Пауза': 'Старт'}</button>
        <button className="buttons__btn" onClick={onEndCounter}>Сбросить</button>
      </div>
    </div>
  </div>
};