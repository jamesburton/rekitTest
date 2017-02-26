import initialState from './initialState';
import { reducer as sampleActionReducer } from './sampleAction';
import { reducer as addStaffReducer } from './addStaff';
import { reducer as showStaffReducer } from './showStaff';
import { reducer as hideStaffReducer } from './hideStaff';
import { reducer as deleteStaffReducer } from './deleteStaff';
import { reducer as editStaffReducer } from './editStaff';

const reducers = [
  sampleActionReducer,
  addStaffReducer,
  showStaffReducer,
  hideStaffReducer,
  deleteStaffReducer,
  editStaffReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
