import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaUsers, FaHandsHelping } from 'react-icons/fa';

let AboutUs = () => {
  return (
    <Container className="about-us py-5 text-dark">
      {/* Header Section */}
      <Row className="mb-4">
        <Col className="text-center">
          <h2>About Us</h2>
          <hr className='border border-dark' />
          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus consectetur hic veritatis unde a maiores quod accusantium. Non, ex asperiores dolore blanditiis aut voluptates modi error culpa nemo atque ipsa. Accusamus eos earum quibusdam et dignissimos odio, corporis debitis molestiae. Quasi vero tempora deleniti in eum. Ducimus cumque quos fuga quae amet saepe iure, repellat dolorum impedit id placeat perferendis dolores quas tempore maxime provident. Voluptatum iure molestias nihil placeat quidem saepe, atque error minima! Ab, unde? Blanditiis suscipit repudiandae, excepturi ipsam eveniet laborum voluptates, laudantium error cumque delectus veritatis? Illum quo et blanditiis? Quasi nihil necessitatibus sint quibusdam.
          </p>
        </Col>
      </Row>
      
      {/* Contact Info Section */}
      <Row className="mb-4">
        <Col md={4} className="text-center">
          <FaMapMarkerAlt size={50} color="#fd7e14" />
          <h4>Our Location</h4>
          <p>Shone, East Badewacho,Ethiopia</p>
        </Col>
        <Col md={4} className="text-center">
          <FaPhoneAlt size={50} color="#fd7e14" />
          <h4>Call Us</h4>
          <p>+2519999999999</p>
        </Col>
        <Col md={4} className="text-center">
          <FaEnvelope size={50} color="#fd7e14" />
          <h4>Email Us</h4>
          <p>info@eyorika.org</p>
        </Col>
      </Row>
      
      {/* Mission & Vision Section */}
      <Row className="mb-4">
        <Col md={6}>
          <h3>Our Mission</h3>
          <hr />
          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur sequi ad quos vitae necessitatibus, quasi assumenda voluptas illum accusamus molestias magni dolorum error culpa dolore atque placeat amet autem, cum, harum maxime? Cupiditate consectetur cum quibusdam perferendis repudiandae delectus quod architecto, odio, eius reprehenderit praesentium, enim hic atque dolore ratione harum nesciunt minus eos eveniet sequi veritatis! Nesciunt corporis maxime totam, enim numquam necessitatibus quis laudantium unde. Cum illum nihil cupiditate dolorum ut architecto doloribus similique quas delectus velit quidem itaque, in nam facilis eius fugit quos perferendis vitae.          </p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
          <hr />
          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et, totam maxime optio doloribus earum facilis nulla corporis? Aut quod sint, enim eligendi repudiandae exercitationem ea dignissimos facilis asperiores. Nulla debitis, laborum esse itaque nam ullam illo iure veritatis cum rem molestiae, fugit totam laboriosam vitae. Modi delectus quasi magni sapiente in rem? Vitae, omnis voluptates aliquam perferendis pariatur nisi dolorum deleniti ipsum ea recusandae et aperiam, vero sunt suscipit iste cumque, incidunt minima odit quo molestias cum vel? Debitis saepe ad nulla officiis ratione, fuga cum dolore voluptatem ducimus.          </p>
        </Col>
      </Row>
      
      {/* Additional Information Section */}
      <Row className="mb-4">
        <Col md={4} className="text-center">
          <FaGlobe size={50} color="#fd7e14" />
          <h4>Partnerships</h4>
          <p>Collaborating with other teams to bring profound change.</p>
        </Col>
        <Col md={4} className="text-center">
          <FaUsers size={50} color="#fd7e14" />
          <h4>Volunteers</h4>
          <p>Over 100 dedicated volunteers making a difference.</p>
        </Col>
        <Col md={4} className="text-center">
          <FaHandsHelping size={50} color="#fd7e14" />
          <h4>Community Impact</h4>
          <p>Many lives supported and uplifted every year.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
