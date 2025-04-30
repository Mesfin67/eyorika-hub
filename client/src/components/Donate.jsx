// frontend/src/components/Donate.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert, Form, FormControl } from 'react-bootstrap';
import { FaCopy } from 'react-icons/fa';

const Donate = () => {
  // Bank information details
  const bankDetails = {
    bankName: "CBE",
    bankAccountName: "Eyorika Charity",
    bankAccountNumber: "00000000000",
    IBAN: "ET00 1234  7890",
  };

  const [copySuccess, setCopySuccess] = useState('');

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('Copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  return (
    <Container className="donate py-5">
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <h2>Donate</h2>
          <p>Your support helps us empower communities. Choose your preferred donation method below.</p>
        </Col>
      </Row>

      {/* Bank Transfer Section */}
      <Row className="mb-4">
        <Col xs={12}>
          <h4>Bank Transfer Details</h4>
          <hr />
        </Col>
        <Col xs={12} md={6}>
          <p>
            <strong>Bank Name:</strong> {bankDetails.bankName}
          </p>
          <p>
            <strong>Account Name:</strong> {bankDetails.bankAccountName}
          </p>
          <p>
            <strong>Account Number:</strong> {bankDetails.bankAccountNumber}{' '}
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={() => copyToClipboard(bankDetails.bankAccountNumber)}
            >
              <FaCopy />
            </Button>
          </p>
          <p>
            <strong>IBAN:</strong> {bankDetails.IBAN}{' '}
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={() => copyToClipboard(bankDetails.IBAN)}
            >
              <FaCopy />
            </Button>
          </p>
          {copySuccess && <Alert variant="success" className="mt-2 p-2">{copySuccess}</Alert>}
        </Col>
      </Row>

      {/* Other Donation Methods */}
      <Row className="mb-4">
        <Col xs={12}>
          <h4>Other Donation Methods</h4>
          <hr />
        </Col>
        <Col xs={12} md={6}>
          <p>
            <strong>Mobile Money:</strong> Donate via telebirr at: <span style={{ fontWeight: 'bold' }}>091999999999</span>{' '}
            <Button variant="outline-secondary" size="sm" onClick={() => copyToClipboard("0919123456")}>
              <FaCopy />
            </Button>
          </p>
          <p>
            <strong>CBE BIRR Donation:</strong> Donate via CBE birr at{' '}
            <a href="https://combanketh.et/" target="_blank" rel="noopener noreferrer">
            https://combanketh.et/
            </a>
          </p>
        </Col>
        <Col xs={12} md={6}>
          <p>
            <strong>Donation Message:</strong>(optional) Leave a message with your donation.
          </p>
          <Form>
            <Form.Group controlId="donationMessage">
              <FormControl as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Donate;
