import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component.jsx";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setCredentials({ email: "", password: "" });
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
        {/* <input
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          required
        /> */}
        {/* <label htmlFor="email">Email</label> */}

        {/* <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label> */}
        <FormInput
          label="password"
          handleChange={handleChange}
          type="password"
          name="password"
          value={credentials.password}
          required
        />
        <CustomButton submit={true}>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
