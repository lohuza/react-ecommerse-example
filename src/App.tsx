import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

interface User {
  id?: string;
  email?: string;
  displayName?: string;
  createdAt?: Date;
}

const App: React.FC = () => {
  const [userState, setuserState] = useState<User>({});

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const userRef = await createUserProfileDocument(user);
      userRef?.onSnapshot((snapshot) => {
        setuserState({ id: snapshot.id, ...snapshot.data() });
      });
    });

    return () => {
      auth.signOut();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={userState} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
