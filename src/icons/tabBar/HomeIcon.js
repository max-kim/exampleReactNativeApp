import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ color = 'black', ...props }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path stroke={color} fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
  </Svg>
);

export default HomeIcon;
