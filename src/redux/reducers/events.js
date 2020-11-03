import { ADD_EVENT, TOGGLE_EVENT, FETCH_EVENTS_PENDING, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_ERROR } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  pending: false,
  fetchItems: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            chosen: false
          }
        }
      }
    }
    case TOGGLE_EVENT: {
      const { id} = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      }
    }

  case FETCH_EVENTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        fetchItems: action.payload
      }
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }

    default:
      return state;
  }
}
