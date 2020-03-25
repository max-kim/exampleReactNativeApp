import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlatListView from '../../common/FlatListView/FlatListView';
import ListViewHeader from '../../common/FlatListView/ListViewHeader/ListViewHeader';
import EmptyList from '../../common/FlatListView/EmptyList/EmptyList';
import ListItem from '../../common/FlatListView/ListItem/ListItem';

import { MessageType } from '../../../core/propTypes/messages';

const MessagesList = ({ messages }) => (
  <MessagesView>
    <FlatListView
      data={messages}
      renderItem={({ item }) => (<ListItem itemText={item.messageText} />)}
      ListHeaderComponent={<ListViewHeader title="Messages" />}
      ListEmptyComponent={<EmptyList emptyText="No symptoms today!" />}
    />
  </MessagesView>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(MessageType).isRequired,
};

const MessagesView = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export default MessagesList;
