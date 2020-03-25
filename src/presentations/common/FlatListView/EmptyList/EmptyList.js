import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmptyList = ({ emptyText }) => (
  <EmptyView>
    <EmptyText>
      {emptyText}
    </EmptyText>
  </EmptyView>
);

EmptyList.propTypes = {
  emptyText: PropTypes.string.isRequired,
};

const EmptyView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmptyText = styled.Text`
  font-size: 18px;
`;


export default EmptyList;
