import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly with an empty list or no listCourses prop', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(2); // Header rows
    expect(wrapper.contains(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
  });

  it('renders the correct number of CourseListRow elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(4); // Header rows + 2 courses
  });
});