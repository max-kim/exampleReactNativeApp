import React from "react";
import Svg, { Path } from "react-native-svg";

import { palette } from '../../core/styleguide';

const Avatar = ({ ...props }) => (
  <Svg width={96} height={96} viewBox="0 0 24 24" {...props}>
    <Path
      stroke={palette.darkgray}
      fill={palette.darkgray}
      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
    />
  </Svg>
);

export default Avatar;
