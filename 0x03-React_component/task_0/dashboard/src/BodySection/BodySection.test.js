import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders correctly with title and children', () => {
    const wrapper = shallow(
      <BodySection title="Test Title">
        <p>Test children</p>
      </BodySection>
    );

    // Check if the title is rendered
    expect(wrapper.find('h2').text()).toBe('Test Title');

    // Check if the children are rendered
    expect(wrapper.find('p').text()).toBe('Test children');
  });

  it('renders correctly without children', () => {
    const wrapper = shallow(
      <BodySection title="Test Title" />
    );

    // Check if the title is rendered
    expect(wrapper.find('h2').text()).toBe('Test Title');

    // Check if no children are rendered
    expect(wrapper.find('p').exists()).toBe(false);
  });
});