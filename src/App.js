import React from 'react';

import './App.css';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import SignPage from './pages/sign/SignPage';

import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebaseUtils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  // class field for handle subscribeFromAuth
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    // this.unsubscribeFromAuth get the function.
    // If will call it, the subcribtion on event onAuthStateChanged will be closed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      
      } else {
        this.setState({currentUser: userAuth}) // in this case userAuth will be null
      }
    
    });
  }

  componentWillUnmount() {
    
    // close subscribtion connection between firebase and app
    this.unsubscribeFromAuth();
  }

  render() {
    
    const { currentUser } = this.state;

    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" render={props => <SignPage isSignIn={currentUser} {...props} />} />
        </Switch>
      </>
    );
  }
}

export default App;
