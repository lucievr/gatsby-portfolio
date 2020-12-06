import React from "react"
import { Formik, Form, Field } from "formik"
import { navigate } from "gatsby"
import * as Yup from "yup"
import Button from "react-bootstrap/Button"
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti"

import { OutboundLink } from "gatsby-plugin-google-analytics"
import GitHubCard from "@components/GitHubCard"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name too short")
    .max(70, "Name too long")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string()
    .min(15, "Your message is too short")
    .max(5000, "Your message is too long")
    .required("Required"),
})

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  return (
    <section id="contact" className="section--plain">
      <h2>
        <span className="symbol--orange">+</span> Contact{" "}
        <span className="symbol--orange">+</span>
      </h2>

      <div style={{ margin: `1rem` }}>
        <h5 style={{ margin: `1rem` }}>Let's get social</h5>
        <OutboundLink
          href="https://github.com/lucievr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialGithubCircular className="icon--contact hvr-bob" />
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/in/lucie-vrsovska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialLinkedinCircular className="icon--contact hvr-bob" />
        </OutboundLink>
        <OutboundLink
          href="https://twitter.com/lucie_vrs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialTwitterCircular className="icon--contact hvr-bob" />
        </OutboundLink>
      </div>

      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          flexWrap: `wrap`,
        }}
      >
        <div>
          <GitHubCard />
          <Formik
            initialValues={{
              "bot-field": "",
              "form-name": "contact",
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={SignupSchema}
            validateOnChange={true}
            onSubmit={(values, actions) => {
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...values }),
              })
                .then(() => {
                  navigate("/success/")
                  actions.resetForm()
                  actions.setSubmitting(false)
                })
                .catch(error => alert(error))
            }}
          >
            {({
              isSubmitting,
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
            }) => (
              <Form
                className="form--main"
                name="contact"
                method="post"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/success/"
              >
                <h5 style={{ margin: `0.5rem 1rem 3rem 1rem` }}>
                  Or send me a message
                </h5>
                <input type="hidden" name="form-name" value="contact" />
                <input name="bot-field" type="hidden" />
                <div className="form__container">
                  <div className="form__row">
                  <div className="form__input">
                    <label htmlFor="name">Full Name *</label>
                    <Field
                      className="form__control"
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name ? (
                      <div className="error-message">{errors.name}</div>
                    ) : null}
                    </div>
                    <div className="form__input">
                    <label htmlFor="email">Email *</label>
                    <Field
                      className="form__control"
                      type="email"
                      placeholder="Your email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="message">Your message *</label>
                    <Field
                      className="field__text"
                      type="text"
                      as="textarea"
                      rows="5"
                      placeholder="Enter your message here..."
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    {errors.message && touched.message ? (
                      <div className="error-message">{errors.message}</div>
                    ) : null}
                  </div>
                </div>
                <Button
                  className="btn--submit hvr-glow"
                  block
                  type="submit"
                  disabled={isSubmitting}
                >
                  SEND MESSAGE
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Contact
