export interface FormikValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface FormikErrors {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
}