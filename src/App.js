import './App.css';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header'; 

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
