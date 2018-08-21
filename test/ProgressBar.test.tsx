import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgressBar from '../src/ProgressBar';
import toJson from 'enzyme-to-json';

describe('ProgressBar', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  test('renders correctly', () => {
    const component = shallow(
      <ProgressBar width={200} progress={10} showPercentage />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  test('renders correctly without percentage text', () => {
    const component = shallow(
      <ProgressBar width={200} progress={10} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
