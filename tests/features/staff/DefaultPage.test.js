import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/staff/DefaultPage';

describe('staff/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      staff: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.staff-default-page').node
    ).to.exist;
  });
});
