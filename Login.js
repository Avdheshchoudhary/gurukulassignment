import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

// Updated mock authentication function
const authenticate = (name, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'admin' && password === 'Admin@123') {
        resolve('Login successful');
      } else {
        reject('Invalid username or password');
      }
    }, 1000);
  });
};

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (data) => {
    try {
      setAuthError(''); // Clear previous errors
      await authenticate(data.name, data.password);
      console.log('Login successful');
      navigate('/'); // Redirect to the home page
    } catch (error) {
      setAuthError(error); // Set authentication error
    }
  };

  return (
    <div className="login-container mt-4">
      <h1>Login</h1>
      {authError && <Alert variant="danger">{authError}</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => <Form.Control {...field} type="text" isInvalid={!!errors.name} />}
          />
          {errors.name && <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Password is required' }}
            render={({ field }) => <Form.Control {...field} type="password" isInvalid={!!errors.password} />}
          />
          {errors.password && <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>}
        </Form.Group>

        <Button className='mt-2' variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
