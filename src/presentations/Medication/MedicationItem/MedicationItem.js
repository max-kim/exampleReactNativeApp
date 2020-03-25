import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { container } from '../../../core/styleguide';
import { MedicationType } from '../../../core/propTypes/medication';
import CheckBoxIcon from '../../../icons/CheckBoxIcon';

const MedicationItem = ({
  medication,
  updateMedicationItem,
  pushToMedicationDetails,
}) => {
  const {
    id, title, time, checked,
  } = medication;

  return (
    <ContentView>
      <ItemView>
        <TouchableItem
          onPress={() => pushToMedicationDetails(medication)}
        >
          <ItemText>
            {time}
          </ItemText>
          <ItemText>
            {title}
          </ItemText>
        </TouchableItem>
      </ItemView>
      <TouchableCheckBox
        onPress={() => updateMedicationItem({ id, checked: !checked })}
      >
        <CheckBoxIcon checked={checked} />
      </TouchableCheckBox>
    </ContentView>
  );
};

MedicationItem.propTypes = {
  medication: MedicationType.isRequired,
  updateMedicationItem: PropTypes.func.isRequired,
  pushToMedicationDetails: PropTypes.func.isRequired,
};

const ContentView = styled.View`
  flex-direction: row;
  width: 100%;
`;

const ItemView = styled.View`
  flex: 1;
  height: 48px;
  padding-horizontal: ${container.paddingHorizontal}px;
`;

const ItemText = styled.Text`
  font-size: 18px;
  margin-right: 16px;
`;

const TouchableItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const TouchableCheckBox = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
`;

export default MedicationItem;
