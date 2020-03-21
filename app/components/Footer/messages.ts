/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'movieRatingSystem.components.Footer';

export default defineMessages({
  aboutMessage: {
    id: `${scope}.about.message`,
    defaultMessage: 'Movie rating system',
  },
});
