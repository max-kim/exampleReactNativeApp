import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Separator from '../Separator/Separator';
import { container, palette } from '../../../core/styleguide';

const FlatListView = ({
  data,
  backgroundColor,
  ...other
}) => (
  <FlatList
    data={data}
    listEmpty={!data.length}
    color={backgroundColor}
    {...other}
  />
);

const FlatList = styled.FlatList.attrs(({ listEmpty, keyExtractor }) => ({
  contentContainerStyle: {
    flex: 1,
    paddingTop: container.paddingTop,
    paddingBottom: container.paddingTop,
    backgroundColor: palette.lightGray,
    height: (listEmpty ? '100%' : 'auto'),
    width: '100%',
  },
  style: {
    marginTop: 24,
    width: '100%',
  },
  variant: 'fullScreen',
  ItemSeparatorComponent: () => (<Separator indent />),
  ListFooterComponent: () => (<Separator />),
  keyExtractor: (item) => (keyExtractor ? keyExtractor(item) : String(_.get(item, 'id'))),
}))``;

export default FlatListView;
