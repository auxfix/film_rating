import React from 'react';
import { shallow } from 'enzyme';
import { Sort } from '../../../constants';
import MoviesSortHeader from '../index';

describe('<MoviesSortHeader/>', () => {
  it('<MoviesSortHeader/> rendered with the right props', () => {
    const testClickHandler = () => {};
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={testClickHandler}
        order={Sort.ASC}
        filed={Sort.NAME}
      />,
    );

    expect(header.exists()).toBe(true);
  });
});
