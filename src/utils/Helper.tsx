import { FormikErrors, FormikValues } from "../types/FormikTypes";
import { regEmail, regName, regPassword } from "./Constants";

export const validateSignUp = (values: FormikValues) => {
    let errors: FormikErrors = {};

    if (!values.firstName.trim().length) {
        errors.firstName = 'Required';
    } else if (!values.firstName.match(regName)) {
        errors.firstName = 'Invalid first name';
    };

    if (!values.lastName.trim().length) {
        errors.lastName = 'Required'
    } else if (!values.lastName.match(regName)) {
        errors.lastName = 'Invalid last name'
    };

    if (!values.email.trim().length) {
        errors.email = 'Required'
    } else if (!values.email.match(regEmail)) {
        errors.email = 'Invalid email format'
    };

    if (!values.password.trim().length) {
        errors.password = 'Required'
    } else if (!values.password.match(regPassword)) {
        errors.password = '6-12 symbols incl. number and special'
    };

    console.log(errors);
    return errors
}

export const validateSignIn = (values: FormikValues) => {
  let errors: FormikErrors = {};

  if (!values.email.trim().length) {
      errors.email = 'Required'
  } else if (!values.email.match(regEmail)) {
      errors.email = 'Invalid email format'
  };

  if (!values.password.trim().length) {
      errors.password = 'Required'
  } else if (!values.password.match(regPassword)) {
      errors.password = '6-12 symbols incl. number and special'
  };

  return errors
}