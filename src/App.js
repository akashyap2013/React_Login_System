
import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/register" component={Register}></Route>
              </Switch>
          </BrowserRouter>
  );
}

export default App;
