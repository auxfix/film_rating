/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'movieRatingSystem.components.Header';

export default defineMessages({
  search: {
    id: `${scope}.Search`,
    defaultMessage: 'Movie search',
  },
  myMovies: {
    id: `${scope}.MyMovies`,
    defaultMessage: 'My movies',
  },
});
