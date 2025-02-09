const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO_ITEM":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todos;
