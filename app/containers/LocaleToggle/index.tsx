/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Wrapper from './Wrapper';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const stateSelector = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export default function LocaleToggle() {
  const { locale } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onLocaleToggle = option => dispatch(changeLocale(option.value));
  return (
    <Wrapper>
      <Dropdown options={appLocales} onChange={onLocaleToggle} value={locale} />
    </Wrapper>
  );
}
