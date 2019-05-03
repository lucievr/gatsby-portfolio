import React from "react"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const Contact = () => (
  <section id="contact" className="colorSection">
    <h2>Contact</h2>
    <p>Get in touch</p>

    <Form style={{width: `70%`, margin: `0 auto`}}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="Your message" />
      </Form.Group>

      <Button variant="secondary" size="lg" block type="submit">
        Send message
      </Button>
    </Form>
  </section>
)

export default Contact
