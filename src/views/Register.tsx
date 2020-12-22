import React, { useState } from "react"
import AppShell from "../components/app-shell"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { RouteComponentProps, withRouter } from "react-router"
import axios from "axios"

interface RegisterValues {
  firstName: string,
  email: string,
  password: string
}

const Register = ({ history }: RouteComponentProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("")

  return (
    <AppShell>
      <div className="center-wrapper">
        <h1 className="register-header">Register</h1>
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            password: ""
          }}
          onSubmit={(
            values: RegisterValues,
            { setSubmitting }: FormikHelpers<RegisterValues>
          ) => {
            console.log(values)
            axios.post("http://localhost:3000/register", values)
              .then(res => {
                console.log(res)
                setSubmitting(false)
                history.push("/dashboard")
              })
              .catch(err => {
                console.log(err)
                setSubmitting(false)
                setErrorMessage(err.message)
              })
          }}
        >
          <Form className="form-wrapper register">
            <div className="input-wrapper">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <Field 
                className="input"
                name="firstName"
                id="firstName"
                type="text" 
              />
            </div>
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
              Register
            </button>
          </Form>
        </Formik>
        <p className="redirect">
          Already have an account? Login{" "}
            <a href="/login">here.</a>
        </p>
      </div>
    </AppShell>
  )
}

export default withRouter(Register)
