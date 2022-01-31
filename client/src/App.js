import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/main';
import './App.css';
import Create from './components/create';
import Update from './components/update';

function App() {

  return (
    <div className="App">
      <h1>Awesome Authors</h1>
      <Switch>

        <Route exact path="/authors/:id/update">
          <Update/>
        </Route>

        {/*view one product*/}
        <Route exact path="/authors/new">
          <Create/>
        </Route>

        {/*Main page*/}
        <Route  exact path="/authors">
          <Main/>
        </Route>

        <Route path="/">
          <Redirect to="/authors"/>{/* redirects back to home */}
        </Route>
        

      </Switch>

    </div>
  );
}

export default App;
