import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Comunity from './components/Comunity';
import ErrorPage from './components/ErrorPage';

import './App.css';

function App () {

      return (
        <BrowserRouter>
          <Menu />

          <Switch>
              <Route exact path="/" component={Docs} />
              <Route path="/tutorials" component={Tutorials} />
              <Route path="/comunity" component={Comunity} />
              <Route component={ErrorPage} />
          </Switch>

        </BrowserRouter>
      );
}

export default App;