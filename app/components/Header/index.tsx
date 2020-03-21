import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.search} />
        </HeaderLink>
        <HeaderLink to="/my">
          <FormattedMessage {...messages.myMovies} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
