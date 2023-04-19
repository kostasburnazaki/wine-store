import { useFormik } from "formik";
import { FC } from "react"
import { FormikValues } from "../../types/FormikTypes";
import { validateSignIn } from "../../utils/Helper";
import { initValues } from "../../utils/Constants";

export const Signin: FC = () => {

    const onSubmit = (values: FormikValues) => {
        console.log(values)
    };

    const initialValues = initValues.formik;

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate: validateSignIn,
    }
    );

    return (
        <form
          action="POST"
          className="form"
          onSubmit={formik.handleSubmit}
        >
            <h2 className="form__title">
              Sign In:
            </h2>

            <label className="form__label" htmlFor="email">Email</label>

            <input
                className="form__input"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
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
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <span className="form__error">
                {formik.errors.password}
            </span>

            <button
              className="form__button"
              type="submit">
                Sign in
            </button>
        </form>
    )
}