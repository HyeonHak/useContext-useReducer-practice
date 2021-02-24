export const ADD = "ADD";
export const DEL = "DEL";
export const COMPLETE = "COMPLETE";
export const UNCOMPLETE = "UNCOMPLETE";
export const intialValue = {
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
      console.log(action.payload);

      return {
        ...state,
        unCompletedTodos: state.unCompletedTodos.filter(
          ({ id }) => id !== action.payload
        ),
        completedTodos: state.completedTodos.filter(
          ({ id }) => id !== action.payload
        )
      };
    case COMPLETE:
      return {
        ...state,
        unCompletedTodos: state.unCompletedTodos.filter(
          ({ id }) => id !== action.payload.id
        ),
        completedTodos: [...state.completedTodos, action.payload]
      };
    case UNCOMPLETE:
      return {
        ...state,
        completedTodos: state.completedTodos.filter(
          ({ id }) => id !== action.payload.id
        ),
        unCompletedTodos: [...state.unCompletedTodos, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
