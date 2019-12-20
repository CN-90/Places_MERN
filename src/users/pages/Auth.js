import React, { useState, useContext } from 'react';

import Input from './../../shared/components/formElements/input/Input';
import Button from './../../shared/components/formElements/Button/Button';
import { useForm } from './../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from './../../shared/components/utils/validators';

import './Auth.css';
import Card from './../../shared/components/UIElements/Card/Card';
import { AuthContext } from '../../shared/context/auth-context';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  });

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = e => {
    e.preventDefault();
    if (isLoginMode) {
      auth.login();
    }
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="display name"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Display name is required."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="email"
          placeholder="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
          value={formState.email}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="password"
          placeholder="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Password must be longer than 5 characters."
          onInput={inputHandler}
          value={formState.password}
        />
        <Button disabled={!formState.isValid} type="submit">
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button onClick={switchModeHandler} inverse>
        {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
