import * as React from "react"
import AppShell from "../components/app-shell"
import { AuthContext } from "../context/auth-provider"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { RouteComponentProps, withRouter } from "react-router"
import axios from "axios"

interface FormValues {
  email: string,
  password: string
}

const Login = ({ history }: RouteComponentProps) => {
  const auth = React.useContext(AuthContext)

  return (
    <AppShell>
      <div className="center-wrapper">
        <h1 className="register-header">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={async (
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            console.log(values)
            const response = await auth.login(values)
            history.replace("/dashboard")
            setSubmitting(false)
          }}
        >
          <Form className="form-wrapper login">
            <div className="input-wrapper">
              <label className="label" htmlFor="email">
                Email
              </label>
              <Field 
                className="input"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="password">
                  Password
              </label>
              <Field 
                className="input"
                name="password"
                id="password"
                type="password"
              />
            </div>
            <button className="button-form" type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <p className="redirect">
          Don't have an account yet? Register{" "}
            <a href="/register">here.</a>
        </p>
      </div>
    </AppShell>
  )
}

export default withRouter(Login)
