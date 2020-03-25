import React from 'react';
import styled from 'styled-components';

const CalendarEmpty = () => (
  <CalendarEmptyView>
    <CalendarEmptyText>
      Calendar.
    </CalendarEmptyText>
    <CalendarEmptyText>
      Nothing here
    </CalendarEmptyText>
  </CalendarEmptyView>
);

const CalendarEmptyView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CalendarEmptyText = styled.Text`
  font-size: 20px;
`;


export default CalendarEmpty;
