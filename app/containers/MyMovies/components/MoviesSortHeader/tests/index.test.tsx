import React from 'react';
import { shallow } from 'enzyme';
import { Sort } from '../../../constants';
import MoviesSortHeader, { ClickWrapper } from '../index';

describe('<MoviesSortHeader/>', () => {
  it('<MoviesSortHeader/> is rendered', () => {
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
  it('click on active Name/Asc -> get Name/DSC', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.NAME}
        order={Sort.ASC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(0).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.NAME, Sort.DSC);
  });
  it('click on active Name/DSC-> get Name/ASC', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.NAME}
        order={Sort.DSC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(0).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.NAME, Sort.ASC);
  });
  it('click on not active Name/Asc -> get Name/Dsc', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.RATING}
        order={Sort.ASC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(0).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.NAME, Sort.DSC);
  });
  it('click on not active Name/DSC-> get Name/Asc', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.RATING}
        order={Sort.DSC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(0).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.NAME, Sort.ASC);
  });

  it('click on active Rating/Asc -> get Rating/DSC', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.RATING}
        order={Sort.ASC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(1).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.RATING, Sort.DSC);
  });
  it('click on active Rating/DSC-> get Rating/ASC', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.RATING}
        order={Sort.DSC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(1).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.RATING, Sort.ASC);
  });
  it('click on not active Rating/Asc -> get Rating/Dsc', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.NAME}
        order={Sort.ASC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(1).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.RATING, Sort.DSC);
  });
  it('click on not active Rating/DSC-> get Rating/Asc', () => {
    const onClickSpy = jest.fn();
    const header = shallow(
      // tslint:disable-next-line:jsx-wrap-multiline
      <MoviesSortHeader
        onClickHandler={onClickSpy}
        filed={Sort.NAME}
        order={Sort.DSC}
      />,
    );
    const clickWrappers = header.find(ClickWrapper);
    clickWrappers.at(1).simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith(Sort.RATING, Sort.ASC);
  });
});
