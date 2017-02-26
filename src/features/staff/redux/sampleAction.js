import {
  STAFF_SAMPLE_ACTION,
} from './constants';

export function sampleAction() {
  return {
    type: STAFF_SAMPLE_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case STAFF_SAMPLE_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
