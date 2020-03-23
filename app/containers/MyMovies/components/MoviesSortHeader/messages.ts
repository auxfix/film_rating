import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.MyMovies';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  rating: {
    id: `${scope}.rating`,
    defaultMessage: 'Rating',
  },
});
