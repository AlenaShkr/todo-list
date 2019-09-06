let counter = 0;
export const addTodoItem = text => ({
  type: "ADD_TODO_ITEM",
  id: counter++,
  text
});

export const setComplitedFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const ComplitedFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_INCOMPLETED"
};
