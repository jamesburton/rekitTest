import { expect } from 'chai';

import {
  STAFF_ADD_STAFF,
} from 'src/features/staff/redux/constants';

import {
  addStaff,
  reducer,
} from 'src/features/staff/redux/addStaff';

describe('staff/redux/addStaff', () => {
  it('returns correct action by addStaff', () => {
    expect(addStaff()).to.have.property('type', STAFF_ADD_STAFF);
  });

  it('handles action type STAFF_ADD_STAFF correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STAFF_ADD_STAFF }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
