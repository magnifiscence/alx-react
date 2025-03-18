import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow', () => {
  it('renders one cell when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />
    );
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
    );
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
    );
    expect(wrapper.find('td').length).toBe(2);
  });
});