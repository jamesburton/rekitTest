import { expect } from 'chai';

import {
  STAFF_SAMPLE_ACTION,
} from 'src/features/staff/redux/constants';

import {
  sampleAction,
  reducer,
} from 'src/features/staff/redux/sampleAction';

describe('staff/redux/sampleAction', () => {
  it('returns correct action by sampleAction', () => {
    expect(sampleAction()).to.have.property('type', STAFF_SAMPLE_ACTION);
  });

  it('handles action type STAFF_SAMPLE_ACTION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: STAFF_SAMPLE_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
