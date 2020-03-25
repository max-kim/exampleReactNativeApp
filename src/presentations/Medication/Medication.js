import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../common/Container/Container';
import FlatListView from '../common/FlatListView/FlatListView';
import EmptyList from '../common/FlatListView/EmptyList/EmptyList';
import ListViewHeader from '../common/FlatListView/ListViewHeader/ListViewHeader';
import MedicationItem from './MedicationItem/MedicationItem';

import { MedicationType } from '../../core/propTypes/medication';

const Medication = ({
  medicationList,
  updateMedicationItem,
  pushToMedicationDetails,
}) => (
  <Container>
    <MedicationView>
      <FlatListView
        data={medicationList}
        renderItem={({ item }) => (
          <MedicationItem
            medication={item}
            updateMedicationItem={updateMedicationItem}
            pushToMedicationDetails={pushToMedicationDetails}
          />
        )}
        ListHeaderComponent={<ListViewHeader title="Medication" />}
        ListEmptyComponent={<EmptyList emptyText="Nothing here" />}
      />
    </MedicationView>
  </Container>
);

Medication.propTypes = {
  medicationList: PropTypes.arrayOf(MedicationType).isRequired,
  updateMedicationItem: PropTypes.func.isRequired,
  pushToMedicationDetails: PropTypes.func.isRequired,
};

const MedicationView = styled.View`
  flex: 1;
`;

export default Medication;
