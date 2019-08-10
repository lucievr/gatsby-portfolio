import React, { useEffect} from "react"
import Form from "react-bootstrap/Form"
import { Formik } from "formik"
import { navigate } from "gatsby"
import * as Yup from "yup"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti"

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import GitHubCard from "@components/GitHubCard"

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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {

  // useEffect(() => {

  // }
  // , []);

  return (
    <section id="contact" className="section--dark">
      <h2 className="heading--teal">
        <span className="symbol--orange">+</span> Contact{" "}
        <span className="symbol--orange">+</span>
      </h2>

<div style={{display: `flex`, justifyContent: `space-evenly`, flexWrap: `wrap`}}>
<div>
<div style={{margin: `1rem`}}>
  <h5 style={{margin: `1rem`}}>Let's get social</h5>
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
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              navigate("/success/")
              actions.resetForm()
            })
            .catch(error => alert(error))
            .finally(() => actions.setSubmitting(false))
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
            <h5 style={{ margin: `0.5rem 1rem 3rem 1rem` }}>Or send me a message</h5>
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" type="hidden" />
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
              SEND MESSAGE
            </Button>
          </Form>
        )}
      </Formik>
      </div>

    <div style={{margin: `1rem`}}>
      <a className="twitter-timeline" data-width="350" data-height="900" data-link-color="#ff7f50" href="https://twitter.com/lucie_vrs?ref_src=twsrc%5Etfw">Tweets by lucie_vrs</a>
    </div>

</div>
    </section>
  )
}

export default Contact
