import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { StaffList } from 'src/features/staff/StaffList';

describe('staff/StaffList', () => {
  it('renders node with correct class name', () => {
    const props = {
      staff: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <StaffList {...props} />
    );

    expect(
      renderedComponent.find('.staff-staff-list').node
    ).to.exist;
  });
});
