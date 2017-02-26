import {
  STAFF_EDIT_STAFF,
} from './constants';

export function editStaff() {
    return {
        type: STAFF_EDIT_STAFF,
    };
}

export function reducer(state, action) {
    switch (action.type) {
    case STAFF_EDIT_STAFF: {
        const existing = state.staffMembers.find(staff => staff.id === action.staff.id);
        const replacement = Object.assign({}, existing, action.staff);
        const index = state.staffMembers.indexOf(existing);
        const members = [].concat(action.staffMembers.splice(index, 1, replacement));
        return {
            ...state,
            ...{ staffMembers: members }
        };
    }
    default:
        return state;
    }
}
