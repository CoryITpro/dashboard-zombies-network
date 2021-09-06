import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "pages/Home"

import { ROUTES } from "configurations"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.Home} component={Home} />
    </Switch>
  </Router>
)

export default AppRouter
