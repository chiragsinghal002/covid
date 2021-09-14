import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, withRouter, Switch, useHistory } from 'react-router-dom'
import Home from './Home';
import Prevention from './Prevention';
import Quarantine from './Quarantine';
import About from './About';
import Tracker from './Tracker';

function App() {
  const history=useHistory();

  //console.log('chirag');
  return (
   
  <BrowserRouter>
    <switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/prevention"}>
        <Prevention />
      </Route>
      <Route exact path={"/quarantine"}>
        <Quarantine />
      </Route>
      <Route exact path={"/about"}>
        <About />
      </Route>
      <Route exact path={"/tracker/:id"}>
        <Tracker />
      </Route>
    </switch>
  </BrowserRouter>

  );
}

export default App;
