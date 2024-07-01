
import { useForm } from 'react-hook-form';

const useFormValidation = (onSubmit, validationRules) => {
  const { handleSubmit, control } = useForm();

  const useFieldProps = (name) => ({
    ...validationRules[name],
    control,
  });

  return { handleSubmit, useFieldProps };
};

export default useFormValidation;
