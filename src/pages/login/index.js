import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../../firebase';
import { login, selectAuth } from '../../store/slices/auth';

import userIcon from './user.png';
import passwordIcon from './password.png';
import {
  Section,
  Container,
  Form,
  InputContainer,
  Alert,
  Icon,
  Input,
  Error,
  Button,
} from './styled';

export default () => {
  const [serverError, setServerError] = useState();

  const authUser = useSelector(selectAuth);
  const history = useHistory();

  useEffect(() => {
    if (authUser.email) {
      history.push('/dashboard');
    }
  }, [history, authUser]);

  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm();

  const authHandler = async (data) => {
    const { email, password } = data;
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      dispatch(login({ email: res.user.email, password: res.user.uid }));
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <Section>
      <Container>
        <h1>Log In</h1>
        <br />
        {serverError && <Alert>{serverError}</Alert>}
        <Form onSubmit={handleSubmit(authHandler)}>
          <InputContainer>
            <Input
              onChange={() => setServerError()}
              style={{ border: (errors.email || serverError) && '1px solid red' }}
              placeholder="Email"
              name="email"
              type="email"
              ref={register({
                required: '*This field is required',
                pattern: {
                  value: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
                  message: '*Please enter a valid email address',
                },
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
            <Icon src={userIcon} alt="user" />
          </InputContainer>

          <InputContainer>
            <Input
              onChange={() => setServerError()}
              style={{ border: (errors.password || serverError) && '1px solid red' }}
              placeholder="Password"
              type="password"
              name="password"
              ref={register({ required: '*This field is required' })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
            <Icon src={passwordIcon} alt="password" />
          </InputContainer>

          <Button type="submit">Log in</Button>
        </Form>
      </Container>
    </Section>
  );
};
