import {
  STAFF_SHOW_STAFF,
} from './constants';

export function showStaff(staff) {
    return {
        type: STAFF_SHOW_STAFF, staff
    };
}

function indexById(staff, id) {
    for (let i = 0; i < staff.length; i += 1) {
        if (staff[i].id === id) return i;
    }
    return -1;
}

export function reducer(state, action) {
    switch (action.type) {
    case STAFF_SHOW_STAFF: {
        const staff = { ...action.staff };
        const index = indexById(state.staffMembers, staff.id);
        staff.visible = true;
        const members = state.staffMembers.splice(index, 1, staff);
        console.log('index=', index, ', members=', members);
        return Object.assign({}, state, { stateMembers: members });
    }

    default:
        return state;
    }
}
