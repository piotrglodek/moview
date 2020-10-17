import React from 'react';
import { Providers } from './Providers';
import { Switch, Route } from 'react-router-dom';
// components
import { Navigation, Footer, Main } from './components';
// pages
import { Home, Show, SingleMediaPage } from './pages';
// temp React query dev tools
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  return (
    <Providers>
      <Navigation />
      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/movies/page/:pageNumber'
            component={() => <Show mediaType='movie' />}
          />
          <Route
            exact
            path='/tv/page/:pageNumber'
            component={() => <Show mediaType='tv' />}
          />
          <Route
            exact
            path='/tv/:id'
            component={() => <SingleMediaPage mediaType='tv' />}
          />
          <Route
            exact
            path='/movie/:id'
            component={() => <SingleMediaPage mediaType='movie' />}
          />
        </Switch>
      </Main>
      <Footer />
      <ReactQueryDevtools />
    </Providers>
  );
}

export default App;
