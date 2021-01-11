import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
interface HeaderProps {
  currentUser: object;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => (
  <div
    className="header"
    onClick={() => {
      console.log(currentUser);
    }}
  >
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/contact">
        Contact
      </Link>

      <Link className="option" to="/shop">
        Shop
      </Link>
      {Object.keys(currentUser).length !== 0 ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
