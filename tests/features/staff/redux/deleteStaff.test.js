import { expect } from 'chai';

import {
  STAFF_DELETE_STAFF,
} from 'src/features/staff/redux/constants';

import {
  deleteStaff,
  reducer,
} from 'src/features/staff/redux/deleteStaff';

describe('staff/redux/deleteStaff', () => {
  it('returns correct action by deleteStaff', () => {
    expect(deleteStaff()).to.have.property('type', STAFF_DELETE_STAFF);
  });

  it('handles action type STAFF_DELETE_STAFF correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STAFF_DELETE_STAFF }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
