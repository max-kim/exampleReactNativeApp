import { connect } from 'react-redux';

import Calendar from '../../presentations/Calendar/Calendar';
import { getEventsList } from '../../core/flux/selectors/calendar';

const mapStateToProps = (state) => ({
  eventsList: getEventsList(state),
});

export default connect(mapStateToProps)(Calendar);
