import {
  STAFF_DELETE_STAFF,
} from './constants';

export function deleteStaff() {
  return {
    type: STAFF_DELETE_STAFF,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case STAFF_DELETE_STAFF:
      return {
        ...state,
      };

    default:
      return state;
  }
}
