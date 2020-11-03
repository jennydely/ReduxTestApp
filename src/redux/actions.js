import {SET_FILTER,ADD_EVENT,TOGGLE_EVENT,FETCH_EVENTS_PENDING,FETCH_EVENTS_SUCCESS,FETCH_EVENTS_ERROR } from "./actionTypes";

let nextEventId =0;

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const toggleEvent = id => ({
    type: TOGGLE_EVENT,
    payload: { id }
  });

export const addEvent = content => ({
  type: ADD_EVENT,
  payload: {
    id: ++nextEventId,
    content
  }
});

export function fetchEventsPending() {
    return {
        type: FETCH_EVENTS_PENDING
    }
}

export function fetchEventsSuccess(events) {
    return {
        type: FETCH_EVENTS_SUCCESS,
       payload: events
    }
}

export function fetchEventsError(error) {
    return {
        type: FETCH_EVENTS_ERROR,
        error: error
    }
}
