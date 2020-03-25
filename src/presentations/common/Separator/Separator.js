import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { palette, container } from '../../../core/styleguide';

const Separator = ({ style, indent, borderColor }) => (
  <Border
    borderColor={borderColor}
    style={style}
    indent={indent}
  />
);

Separator.propTypes = {
  style: PropTypes.object,
  indent: PropTypes.bool,
  borderColor: PropTypes.string,
};

Separator.defaultProps = {
  style: {},
  indent: false,
  borderColor: palette.darkgray,
};

export const Border = styled.View`
  height: 1px;
  background-color: ${({ borderColor }) => borderColor};
  margin-left: ${({ indent }) => (indent ? `${container.paddingHorizontal}px` : 0)};
`;

export default Separator;
