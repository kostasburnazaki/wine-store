import { FC } from "react";
import { FormikValues } from '../../types/FormikTypes';
import { useFormik } from 'formik';
import { validateSignUp } from "../../utils/Helper";
import { initValues } from "../../utils/Constants";

export const Signup: FC = () => {
    const onSubmit = (values: FormikValues) => {
        console.log(values)
    };
    const initialValues = initValues.formik;

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate: validateSignUp,
    }
    );

    return (
        <form
            action="POST"
            className="form"
            onSubmit={formik.handleSubmit}
        >
            <h2 className="form__title">
                Sign Up:
            </h2>

            <label className="form__label" htmlFor="firstName">First Name</label>

            <input
                className="form__input"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your first name..."
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            <span className="form__error">
                {formik.errors.firstName}
            </span>

            <label className="form__label" htmlFor="lastName">Last Name</label>

            <input
                className="form__input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Your last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            <span className="form__error">
                {formik.errors.lastName}
            </span>

            <label className="form__label" htmlFor="email">Email</label>

            <input
                className="form__input"
                type="text"
                name="email"
                id="email"
                placeholder="Your email..."
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <span className="form__error">
                {formik.errors.email}
            </span>

            <label
              className="form__label"
              htmlFor="password">
                Password
            </label>

            <input
                className="form__input"
                type="password"
                name="password"
                id="password"
                placeholder="Set a password..."
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <span className="form__error">
                {formik.errors.password}
            </span>

            <button
                className="form__button"
                type="submit"
            >
                Register
            </button>
        </form>
    )
}