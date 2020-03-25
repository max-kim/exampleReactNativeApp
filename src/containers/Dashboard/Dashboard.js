import { connect } from 'react-redux';

import Dashboard from '../../presentations/Dashboard/Dashboard';
import { getUserData } from '../../core/flux/selectors/user';
import { getMessagesList } from '../../core/flux/selectors/messages';

const mapStateToProps = (state) => ({
  user: getUserData(state),
  messages: getMessagesList(state),
});

export default connect(mapStateToProps)(Dashboard);
