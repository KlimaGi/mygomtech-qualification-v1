import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./components/Login/Login";
import UsersManagement from "./components/UsersManagement/UsersManagement";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { Routes } from "./constants";
import { UserContextProvider } from "./components/UserContext";

import "./style/styles.scss";

const App = () => (
  <Router>
    <Switch>
      <PublicRoute path={Routes.Login} component={Login} />
      <PrivateRoute
        path={Routes.Users}
        component={() => (
          <UserContextProvider>
            <UsersManagement />
          </UserContextProvider>
        )}
      />
      <Route
        path={Routes.Root}
        component={() => <Redirect to={Routes.Login} />}
      />
    </Switch>
  </Router>
);

export default App;
