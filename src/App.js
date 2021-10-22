import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
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
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/menu'>
            <Resturant/>
          </Route>
          <Route path='/category'>
            <Category></Category>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails/>
          </Route>
          <Route path="/checkout">
              <Checkout></Checkout>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
