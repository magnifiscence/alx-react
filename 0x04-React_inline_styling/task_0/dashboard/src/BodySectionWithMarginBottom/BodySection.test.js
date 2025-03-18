import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check if there is one h2 element with the correct text
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('test title');

    // Check if there is one p element with the correct text
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});