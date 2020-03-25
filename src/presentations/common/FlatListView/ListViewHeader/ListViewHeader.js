import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { container } from '../../../../core/styleguide';
import Separator from '../../Separator/Separator';

const ListViewHeader = ({ title }) => (
  <>
    <Separator />
    <HeaderView>
      <TitleText>
        {title}
      </TitleText>
    </HeaderView>
    <Separator />
  </>
);

ListViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const HeaderView = styled.View`
  flex-grow: 1;
  justify-content: center;
  height: 64px;
  width: 100%;
  padding-horizontal: ${container.paddingHorizontal}px;
`;

const TitleText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;


export default ListViewHeader;
