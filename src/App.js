import "./styles.css";
import React, { useState, useReducer } from "react";
import { uuid } from "uuidv4";
import reducer, {
  ADD,
  COMPLETE,
  DEL,
  intialValue,
  UNCOMPLETE
} from "./components/reducer";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [state, dispatch] = useReducer(reducer, intialValue);
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ADD, payload: { content: inputText, id: uuid() } });
    setInputText("");
  };

  const changeHandler = (event) => {
    setInputText(event.target.value);
  };

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
          <li key={props.id} id={props.id}>
            {props.content}
            <button
              onClick={() =>
                dispatch({
                  type: COMPLETE,
                  payload: { id: props.id, content: props.content }
                })
              }
            >
              Complete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: DEL,
                  payload: props.id
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>Completed todos</h2>
      <ul>
        {state.completedTodos.map((props) => (
          <li key={props.id} id={props.id}>
            {props.content}

            <button
              onClick={() =>
                dispatch({
                  type: UNCOMPLETE,
                  payload: { id: props.id, content: props.content }
                })
              }
            >
              unComplete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: DEL,
                  payload: props.id
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
