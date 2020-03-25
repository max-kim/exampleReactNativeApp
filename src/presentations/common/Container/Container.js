import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { container } from '../../../core/styleguide';

const Container = ({ style, backgroundColor, children }) => (
  <SafeAreaView
    style={style}
    backgroundColor={backgroundColor}
  >
    {children}
  </SafeAreaView>
);

Container.propTypes = {
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.element), PropTypes.element],
  ).isRequired,
};

Container.defaultProps = {
  style: {},
  backgroundColor: container.backgroundColor,
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-vertical: ${container.paddingVertical}px;
  padding-horizontal: ${container.paddingHorizontal}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
`;

export default Container;
