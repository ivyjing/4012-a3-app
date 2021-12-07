import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { CarsHomePage } from './components/pages/CarsHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import {CarDetailsPage} from './components/pages/CarDetailsPage';
import {LoginPage} from './components/pages/LoginPage';
import { NewCarPage } from './components/pages/NewCarPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CarsHomePage />
        </Route>
        <Route path="/cart">
          <ShoppingCartPage />
        </Route>
        <Route path="/car/:year">
          <CarDetailsPage />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/new">
          <NewCarPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;