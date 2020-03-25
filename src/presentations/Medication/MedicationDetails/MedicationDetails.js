import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../../common/Container/Container';
import Separator from '../../common/Separator/Separator';

const MedicationDetails = ({ route: { params: { medicationItem } } }) => (
  <Container>
    <Separator />
    <MedicationView>
      <TitleText>
        {medicationItem.title}
      </TitleText>
      <TimeText>
        {medicationItem.time}
      </TimeText>
    </MedicationView>
    <Separator />
  </Container>
);

MedicationDetails.propTypes = {
  route: PropTypes.object.isRequired,
};

const MedicationView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 24px;
`;

const TimeText = styled.Text`
  margin-top: 16px;
  font-size: 24px;
`;

export default MedicationDetails;
