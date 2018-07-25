import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Splash from './Splash';
import Drawers from './components/Drawers/Drawers';

class App extends Component {
  state = {
    splash: false,
  };
  componentDidMount() {
    //setTimeout(() => this.setState({ splash: false }), 2500); // simulates an async action, and hides the spinner
  }

  render() {
    const { splash } = this.state;
    if (splash) {
      return <Splash />;
    }

    return (
      <ApolloProvider client={client}>
        <Drawers />
        <Router>
          <main>
            <Route exact={true} path={'/'} component={Home} />
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
