import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Menu from './components/Menu';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Comunity from './components/Comunity';
import ErrorPage from './components/ErrorPage';

import './App.css';


class App extends Component {

      constructor(props) {
        super(props)
      
        this.state = {
            underConst: {
            Docs: false,
            Tutorials: true,
            Comunity: false
            }
        }
      }
          
      render() {

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

      // render() {

      //     return (
      //       <BrowserRouter>
      //         <Menu />

      //         <Switch>
      //             <Route exact path="/" component={Docs} />
      //             {/* <Route path="/tutorials" component={Tutorials} /> */}

      //             <Route path="/tutorials" render={() => (
      //                 this.state.underConst.Tutorials ? (<Redirect to='/' ></Redirect>) : (<Tutorials />)
      //             )} />

      //             <Route path="/comunity" component={Comunity} />
      //             <Route component={ErrorPage} />
      //         </Switch>

      //       </BrowserRouter>
      //     );
      // }
}

export default App;