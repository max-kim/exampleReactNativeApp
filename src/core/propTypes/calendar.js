import PropTypes, { shape } from 'prop-types';

export const CalendarType = shape({
  id: PropTypes.string.isRequired,
  eventText: PropTypes.string.isRequired,
});
