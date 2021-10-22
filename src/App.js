import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Category from './components/Resturant/Category/Category';
import Resturant from './components/Resturant/Resturant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/menu'>
            <Resturant></Resturant>
          </Route>
          <Route>
            <Category></Category>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
