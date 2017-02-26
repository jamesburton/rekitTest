import { expect } from 'chai';

import {
  STAFF_EDIT_STAFF,
} from 'src/features/staff/redux/constants';

import {
  editStaff,
  reducer,
} from 'src/features/staff/redux/editStaff';

describe('staff/redux/editStaff', () => {
  it('returns correct action by editStaff', () => {
    expect(editStaff()).to.have.property('type', STAFF_EDIT_STAFF);
  });

  it('handles action type STAFF_EDIT_STAFF correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STAFF_EDIT_STAFF }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
