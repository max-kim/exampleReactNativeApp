import PropTypes, { shape } from 'prop-types';

export const MedicationType = shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
});
