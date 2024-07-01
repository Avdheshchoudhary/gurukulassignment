import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 
import getValidationRules from './validationrules';
import './MyForm.css'; 

const FormComponent = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate
  const validationRules = getValidationRules();

  const onSubmit = data => {
    console.log(data);
    // Perform registration logic here, e.g., API call

    // On successful registration, navigate to the home page
    navigate('/'); // Redirect to home page
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-group">
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={validationRules.name}
          render={({ field }) => <input {...field} className={errors.name ? 'error' : ''} />}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
      <div className="form-group">
        <label>Number</label>
        <Controller
          name="number"
          control={control}
          defaultValue=""
          rules={validationRules.number}
          render={({ field }) => <input {...field} className={errors.number ? 'error' : ''} />}
        />
        {errors.number && <p className="error-message">{errors.number.message}</p>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={validationRules.email}
          render={({ field }) => <input {...field} className={errors.email ? 'error' : ''} />}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={validationRules.password}
          render={({ field }) => <input type="password" {...field} className={errors.password ? 'error' : ''} />}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>
      <div className="form-group">
        <label>Address</label>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={validationRules.address}
          render={({ field }) => <input {...field} className={errors.address ? 'error' : ''} />}
        />
        {errors.address && <p className="error-message">{errors.address.message}</p>}
      </div>
      <div className="form-group">
        <label>Address Line 1</label>
        <Controller
          name="addressLine1"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} className={errors.addressLine1 ? 'error' : ''} />}
        />
        {errors.addressLine1 && <p className="error-message">{errors.addressLine1.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
