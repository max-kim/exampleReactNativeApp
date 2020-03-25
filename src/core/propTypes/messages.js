import PropTypes, { shape } from 'prop-types';

export const MessageType = shape({
  id: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
});
