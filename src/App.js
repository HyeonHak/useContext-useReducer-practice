import "./styles.css";
import React, { useState, useReducer } from "react";
import { uuid } from "uuidv4";

const ADD = "ADD";
const DEL = "DEL";
const COMPLETE = "COMPLETE";
const UNCOMPLETE = "UNCOMPLETE";

export default function App() {
  const [inputText, setInputText] = useState("");
  const intialValue = {
    unCompletedTodos: [],
    completedTodos: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          unCompletedTodos: [...state.unCompletedTodos, action.payload]
        };
      case DEL:
        return {
          ...state,
          unCompletedTodos: state.unCompletedTodos.filter(id=> id !== action.payload))
        };
      case COMPLETE:
        return {
          ...state,
          unCompletedTodos: [...state.unCompletedTodos, action.payload]
        };
      case UNCOMPLETE:
        return {
          ...state
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialValue);
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ADD, payload: { content: inputText, id: uuid() } });
    setInputText("");
  };

  const changeHandler = (event) => {
    setInputText(event.target.value);
  };

  const completeHandler = (event) => {};
  const unCompleteHandler = (event) => {};
  const deleteHandler = (event) => {};
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder={"write todos..."}
          value={inputText}
          onChange={changeHandler}
        ></input>
      </form>
      <h2>unCompleted todos</h2>
      <ul>
        {state.unCompletedTodos.map((props) => (
          <>
            <li>{props.content}</li>
            <button onClick={() => dispatch({ type: COMPLETE })}>
              Complete
            </button>
            <button onClick={() => dispatch({ type: DEL, payload: props.id })}>
              Delete
            </button>
          </>
        ))}
      </ul>

      <h2>Completed todos</h2>
      <ul>
        {state.completedTodos.map((props) => (
          <>
            <li>{props}</li>
            <button onClick={unCompleteHandler}>unComplete</button>
            <button onClick={deleteHandler}>Delete</button>
          </>
        ))}
      </ul>
    </>
  );
}
