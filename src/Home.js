import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { HOME_PAGE } from './queries';
import User from './User';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Home | MovieQL</title>
    </Helmet>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return 'loading';
        if (error) return 'something happened';

        return data.users.map(user => <User key={user.id} name={user.name} />);
      }}
    </Query>
  </Container>
);

export default Home;
