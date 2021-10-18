import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue(); // Only dispatching here

  useEffect(() => {
    // Runs on App Render
    // The listener for the
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // User just logged in / User was logged in
        // Shoot authUser into the data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The User is logged out
        // Remove user from the data layer
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
