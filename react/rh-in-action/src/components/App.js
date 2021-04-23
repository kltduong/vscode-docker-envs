import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../App.css";

import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UserPicker from "./Users/UserPicker";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>

          <UserPicker />
        </header>

        <Switch>
          <Route path="/bookings">
            <BookingsPage />
          </Route>
          <Route path="/bookables">
            <BookablesPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
