import uuid from 'uuid';
import {
  STAFF_ADD_STAFF,
} from './constants';

export function addStaff(staff) {
    return {
        type: STAFF_ADD_STAFF,
        staff
    };
}

export function reducer(state, action) {
    switch (action.type) {
    case STAFF_ADD_STAFF:
        return { ...state,
            ...{ staffMembers: [].concat(state.staffMembers,
                Object.assign({}, action.staff, { id: uuid.v1(), visible: true })) } };
    default:
        return state;
    }
}
