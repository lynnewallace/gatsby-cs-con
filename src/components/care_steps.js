import React from 'react'
import { Container, Col, Row } from 'reactstrap'

export default () => (
  <Container>
    <h2>Find the right care in 3 easy steps</h2>
    <Row>
      <Col>
        <h3>Tell us your needs</h3>
        <p>
          Submit an online care request to begin a personalised search tailored
          to your needs.
        </p>
      </Col>
      <Col>
        <h3>Review your choices</h3>
        <p>
          Receive a choice of offers, allowing you to confidently review your
          options
        </p>
      </Col>
      <Col>
        <h3>Choose the right offer</h3>
        <p>
          Proceed with the particular offer that you are happy meets your needs.
        </p>
      </Col>
    </Row>
  </Container>
)
