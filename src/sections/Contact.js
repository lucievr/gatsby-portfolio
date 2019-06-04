import React from "react"
import Form from "react-bootstrap/Form"
import { Formik } from "formik"
import * as Yup from "yup"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string()
    .min(35, "Your message is too short!")
    .max(5000, "Your message is too long!")
    .required("Required"),
})

const Contact = () => (
  <section id="contact" className="section--dark">
    <h2 className="heading--teal">
      <span className="symbol--orange">+</span> Contact{" "}
      <span className="symbol--orange">+</span>
    </h2>
    <div>
      <a
        href="https://github.com/lucievr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialGithubCircular className="icon--contact hvr-bob" />
      </a>
      <a
        href="https://www.linkedin.com/in/lucie-vrsovska/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialLinkedinCircular className="icon--contact hvr-bob" />
      </a>
      <a
        href="https://twitter.com/lucie_vrs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialTwitterCircular className="icon--contact hvr-bob" />
      </a>
    </div>

    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 600)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form
          className="form--main"
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success/"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formGridName">
              <Form.Label>Full name *</Form.Label>
              <Form.Control
                className="form__control"
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <div style={{ color: `#ff7f50` }}>{errors.name}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formGridEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                className="form__control"
                type="email"
                placeholder="Your email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div style={{ color: `#ff7f50` }}>{errors.email}</div>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message *</Form.Label>
            <Form.Control
              className="form__control"
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
              <div style={{ color: `#ff7f50` }}>{errors.message}</div>
            ) : null}
          </Form.Group>

          <Button
            className="btn--submit hvr-glow"
            block
            type="submit"
            disabled={isSubmitting}
          >
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  </section>
)

export default Contact
