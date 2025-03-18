import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility Functions', () => {
  // Test for getFullYear
  test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  // Test for getFooterCopy
  test('getFooterCopy returns the correct string when argument is true', () => {
    expect(getFooterCopy(true)).toBe('ALX');
  });

  test('getFooterCopy returns the correct string when argument is false', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
  });

  // Test for getLatestNotification
  test('getLatestNotification returns the correct string', () => {
    const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedNotification);
  });
});