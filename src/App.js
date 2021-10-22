import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
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
            <Resturant/>
          </Route>
          <Route path='/category'>
            <Category></Category>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
