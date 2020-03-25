import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { container } from '../../../../core/styleguide';

const ListItem = ({ itemText }) => (
  <ItemView>
    <ItemText>
      {itemText}
    </ItemText>
  </ItemView>
);

ListItem.propTypes = {
  itemText: PropTypes.string.isRequired,
};

const ItemView = styled.View`
  flex-grow: 1;
  justify-content: center;
  height: 64px;
  width: 100%;
  padding-horizontal: ${container.paddingHorizontal}px;
`;

const ItemText = styled.Text`
  font-size: 16px;
`;


export default ListItem;
