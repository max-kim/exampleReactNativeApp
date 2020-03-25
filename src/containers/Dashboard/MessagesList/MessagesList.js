import { connect } from 'react-redux';

import MessagesList from '../../../presentations/Dashboard/MessagesList/MessagesList';
import { getMessagesList } from '../../../core/flux/selectors/messages';

const mapStateToProps = (state) => ({
  messages: getMessagesList(state),
});

export default connect(mapStateToProps)(MessagesList);
