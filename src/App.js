import './css/index.css';
import React, {useReducer} from 'react';
import {Counter} from "./components/Counter/Counter";
import {CounterProvider} from './contexts/counterContext';
import {counterReducer, initialState} from './redicers/counterReducer';


export const App = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return <CounterProvider value={{state, dispatch}}>
    <Counter/>
  </CounterProvider>
};