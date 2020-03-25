import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlatListView from '../common/FlatListView/FlatListView';
import CalendarEmpty from './CalendarEmpty/CalendarEmpty';
import ListItem from '../common/FlatListView/ListItem/ListItem';
import Separator from '../common/Separator/Separator';

import { CalendarType } from '../../core/propTypes/calendar';
import Container from '../common/Container/Container';

const Calendar = ({ eventsList }) => (
  <Container>
    <CalendarView>
      <FlatListView
        data={eventsList}
        renderItem={({ item }) => (<ListItem itemText={item.eventText} />)}
        ListHeaderComponent={<Separator />}
        ListEmptyComponent={<CalendarEmpty />}
      />
    </CalendarView>
  </Container>
);

Calendar.propTypes = {
  eventsList: PropTypes.arrayOf(CalendarType).isRequired,
};

const CalendarView = styled.View`
  flex: 1;
`;

export default Calendar;
