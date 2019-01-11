import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import ProgressBar from '../src/ProgressBar';
// TODO: remove when MEMO support will be added to enzyme https://github.com/airbnb/enzyme/issues/1875
jest.mock('react', () => {
  const r = jest.requireActual('react');

  return { ...r, memo: (x: any) => x };
});
// end

describe('ProgressBar', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  test('renders correctly', () => {
    const component = shallow(
      <ProgressBar width={200} progress={10} showPercentage />,
    );
    expect(component.find('.rf-progress-txt')).toHaveLength(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  test('renders correctly without percentage text', () => {
    const component = shallow(
      <ProgressBar width={200} progress={10} />,
    );
    expect(component.find('.rf-progress-txt')).toHaveLength(0);
    expect(toJson(component)).toMatchSnapshot();
  });
});
