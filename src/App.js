import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>

    <div className="App">
        <Header />
        <Switch>

        <Route exact path='/'>
          <Home/>
      </Route>
        <Route exact path='*'>
          <NotFound/>
      </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
