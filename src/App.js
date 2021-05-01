import NewNav from './Components/Layout/NewNav';
import CreateConvo from './Components/CreateConvo';
import AllConvos from './Components/AllConvos';
import NotFound from './Components/NotFound';
import HomePage from './Components/HomePage';
import Friends from './Components/Friends';
import Search from './Components/Search';
import Login from './Components/LoginPage/Login';
import DefaultLayout from './Components/Layout/DefaultLayout';
import NoAccLayout from './Components/Layout/NoAccLay';
import Signup from './Components/LoginPage/Signup';
import Logout from './Components/LoginPage/Logout';
import UserPage from './Components/User/UserPage';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalState from './Components/ContextTest/GlobalState';


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
                <Route exact path="/Signup">
                  <Signup />
                </Route>
                <Route exact path="/Logout">
                  <Logout />
                </Route>
                <Route exact path="/deflayout">
                  <DefaultLayout />
                </Route>
                <Route exact path="/noacc">
                  <NoAccLayout />
                </Route>
                <Route exact path="/user">
                  <UserPage />
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
