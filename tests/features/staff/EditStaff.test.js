import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { EditStaff } from 'src/features/staff';

describe('staff/EditStaff', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <EditStaff />
    );

    expect(
      renderedComponent.find('.staff-edit-staff').node
    ).to.exist;
  });
});
