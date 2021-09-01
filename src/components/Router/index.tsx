import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JokesPage } from '../../pages/Jokes';

export function RouterProvider(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <JokesPage />
        </Route>
      </Switch>
    </Router >
  );
}

