import React from 'react';
import styled from 'styled-components';

import Container from '../common/Container/Container';
import Avatar from '../../icons/user/Avatar';
import MessagesList from '../../containers/Dashboard/MessagesList/MessagesList';

import { UserType } from '../../core/propTypes/user';

const Dashboard = ({ user }) => (
  <Container>
    <UserView>
      <AvatarView>
        <Avatar />
      </AvatarView>
      <GreetingView>
        <GreetingText>
          Good morning,
        </GreetingText>
        <GreetingText>
          {user.userName}
        </GreetingText>
      </GreetingView>
    </UserView>
    <MessagesList />
  </Container>
);

Dashboard.propTypes = {
  user: UserType.isRequired,
};

const UserView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const AvatarView = styled.View`
  align-items: center;
  justify-content: center;
`;

const GreetingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GreetingText = styled.Text`
  font-size: 24px;
`;

export default Dashboard;
