import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import HeaderLink from './HeaderLink';
import messages from './messages';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';

function Header() {
  return (
    <Wrapper>
      <div>
        <HeaderLink to="/">
          <FormattedMessage {...messages.search} />
        </HeaderLink>
        <HeaderLink to="/my">
          <FormattedMessage {...messages.myMovies} />
        </HeaderLink>
      </div>
      <LocaleToggle/>
    </Wrapper>
  );
}

export default Header;
