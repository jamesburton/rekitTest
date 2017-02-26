import { expect } from 'chai';

import {
  STAFF_HIDE_STAFF,
} from 'src/features/staff/redux/constants';

import {
  hideStaff,
  reducer,
} from 'src/features/staff/redux/hideStaff';

describe('staff/redux/hideStaff', () => {
  it('returns correct action by hideStaff', () => {
    expect(hideStaff()).to.have.property('type', STAFF_HIDE_STAFF);
  });

  it('handles action type STAFF_HIDE_STAFF correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STAFF_HIDE_STAFF }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
