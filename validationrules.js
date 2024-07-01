const getValidationRules = () => {
  return {
    name: {
      required: 'Name is required',
      minLength: {
        value: 4,
        message: 'Name must be at least 4 characters',
      },
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email address',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
      maxLength: {
        value: 25,
        message: 'Password cannot exceed 25 characters',
      },
      validate: {
        uppercase: value => /[A-Z]/.test(value) || 'Password must include at least one uppercase letter',
        specialCharacter: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must include at least one special character',
      },
    },
    address: {
      required: 'Address is required',
    },
    addressLine1: {
   
    },
    addressLine3: {
      required: 'Address Line 3 is required',
    },
    number: {
      required: 'Number is required',
      pattern: {
        value: /^\d{10}$/,
        message: 'Number must be exactly 10 digits',
      },
    },
  };
};

export default getValidationRules;
