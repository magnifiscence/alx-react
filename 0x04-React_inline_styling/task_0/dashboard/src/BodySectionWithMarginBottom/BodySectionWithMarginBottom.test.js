import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom Component', () => {
  it('renders correctly a BodySection component and passes props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check if the BodySection component is rendered
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);

    // Check if the title is passed correctly to BodySection
    expect(bodySection.prop('title')).toBe('test title');

    // Check if the children are passed correctly to BodySection
    expect(bodySection.prop('children')).toEqual(<p>test children node</p>);
  });

  it('applies the correct CSS class', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check if the div has the correct class
    expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
  });
});
