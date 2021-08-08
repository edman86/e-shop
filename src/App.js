import './App.css';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/ShopPage';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
