import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { palette } from '../core/styleguide';

const CheckBoxIcon = ({ checked, color, ...props }) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"
      fill={checked ? color || palette.darkgray : palette.lightGray}
    />
    <Path
      d="M14.998 7.756L9.02 13.538 5.07 9.447"
      stroke={palette.white}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={10} cy={10} r={9.5} stroke={color || palette.darkgray} />
  </Svg>
);

export default CheckBoxIcon;
