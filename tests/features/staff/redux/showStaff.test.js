import { expect } from 'chai';

import {
  STAFF_SHOW_STAFF,
} from 'src/features/staff/redux/constants';

import {
  showStaff,
  reducer,
} from 'src/features/staff/redux/showStaff';

describe('staff/redux/showStaff', () => {
  it('returns correct action by showStaff', () => {
    expect(showStaff()).to.have.property('type', STAFF_SHOW_STAFF);
  });

  it('handles action type STAFF_SHOW_STAFF correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STAFF_SHOW_STAFF }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
