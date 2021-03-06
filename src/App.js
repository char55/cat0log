import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Counter } from './modules/counter/Counter';
import { Header } from './modules/header/header';
import { Search } from './modules/search/search';
import { Home } from './modules/home/home';
import { Faq } from './modules/faq/faq';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/Counter">
              <Counter />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/search">
              <Search />
            </Route>{' '}
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
