import { VISIBILITY_FILTERS } from "../constants";

export const getEventState = store => store.events;

export const getEventList = store =>
store && store.events ? store.events.allIds : [];

export const getEventsById = (store, id) =>
store && store.events && store.events.byIds
  ? { ...store.events.byIds[id], id }
  : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */

export const getEvents = store =>
getEventList(store).map(id => getEventsById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};



 
