import NewNav from './Components/NewNav';
import CreateConvo from './Components/CreateConvo';
import AllConvos from './Components/AllConvos';
import NotFound from './Components/NotFound';
import HomePage from './Components/HomePage';
import Friends from './Components/Friends';
import Search from './Components/Search';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalState from './Components/ContextTest/GlobalState';

import Login from './Components/Login';

function App() {
  return (
    <div >
      <BrowserRouter>
      <GlobalState>
      <NewNav>
        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/create">
              <CreateConvo />
            </Route>
            <Route exact path="/conversations/">
              <AllConvos />
            </Route>
            <Route exact path="/conversations/:id">
              <AllConvos />
            </Route>
            <Route exact path="/friends">
              <Friends />
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route>
              <NotFound />
            </Route>
        </Switch>
        </NewNav>
        </GlobalState>
      </BrowserRouter>
    </div>
  );
}

export default App;
