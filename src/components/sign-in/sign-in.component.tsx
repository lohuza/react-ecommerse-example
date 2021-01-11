import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component.jsx";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

interface Credentials {
  email: string;
  password: string;
}

const defaultCredentialState: Credentials = {
  email: "",
  password: "",
};

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>(
    defaultCredentialState
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = credentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials(defaultCredentialState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    setCredentials({ ...credentials, ...{ [name]: value } });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          handleChange={handleChange}
          type="email"
          name="email"
          value={credentials.email}
          required
        />

        <FormInput
          label="password"
          handleChange={handleChange}
          type="password"
          name="password"
          value={credentials.password}
          required
        />

        <div className="buttons">
          <CustomButton btn={{ type: "submit" }}>Sign In</CustomButton>
          <CustomButton
            btn={{ type: "button" }}
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
