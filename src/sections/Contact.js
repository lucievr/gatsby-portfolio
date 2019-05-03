import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti"

const Contact = () => (
  <section id="contact" className="colorSection">
    <h2>Contact</h2>
    <div style={{padding: `20px`}}>
      <a href="https://github.com/lucievr" target="_blank" rel="noopener noreferrer"><TiSocialGithubCircular className="contactIcons" /></a>
      <a href="https://www.linkedin.com/in/lucie-vrsovska/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedinCircular className="contactIcons" /></a>
      <a href="https://twitter.com/lucie_vrs" target="_blank" rel="noopener noreferrer"><TiSocialTwitterCircular className="contactIcons" /></a>
    </div>
    <Form style={{ width: `70%`, margin: `0 auto`, padding: `20px` }}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your message</Form.Label>
    <Form.Control as="textarea" rows="5" placeholder="Enter your message here..." />
  </Form.Group>

      <Button variant="secondary" size="lg" block type="submit">
        Send message
      </Button>
    </Form>
  </section>
)

export default Contact
