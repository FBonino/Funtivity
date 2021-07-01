import { Route, Switch } from 'react-router';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route>
          <Route path = '/' component = {Nav} />
          <Route exact path = '/home' component = {Home} />
          <Route path = '/country/:id' component = {Detail} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;