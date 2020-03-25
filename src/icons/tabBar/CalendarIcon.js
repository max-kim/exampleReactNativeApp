import React from "react";
import Svg, { Path } from "react-native-svg";

const CalendarIcon = ({ color = 'black', ...props }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path stroke={color} fill={color} d="M9 10v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m2-7a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V1h2v2h8V1h2v2h1m0 16V8H5v11h14M9 14v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2z" />
  </Svg>
);

export default CalendarIcon;
