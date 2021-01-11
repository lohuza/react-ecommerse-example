import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.component";

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpInitialState: SignUpState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp: React.FC = () => {
  const [signUpState, setSignUpState] = useState<SignUpState>(
    signUpInitialState
  );

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    console.log(name, value);

    setSignUpState({ ...signUpState, ...{ [name]: value } });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = signUpState;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignUpState(signUpInitialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          name="displayName"
          value={signUpState.displayName}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={signUpState.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={signUpState.password}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={signUpState.confirmPassword}
          handleChange={handleChange}
          required
        />

        <CustomButton btn={{ type: "submit" }}>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
