import React from 'react';
import HorizontalCarousel from './HorizontalCarousel';

const Dashboard = ({ user }) => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section text-center text-white py-5"
        style={{ background: 'linear-gradient(45deg, #ff6ec4, #8e44ad, #1abc9c)' }}
      >
        <div className="container">
          <h1 className="display-4">Thank you for joining us</h1>
          <p className="lead">
            Empowering communities through voluntary actions and collective efforts.
          </p>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Impact So Far</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src="/images/hpimg46.jpg"
                alt="Impact 1"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Community Clean-up</h5>
              <p>Revitalizing neighborhoods through community clean-up events.</p>
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="images/hpimg45.jpg"
                alt="Impact 2"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Education Outreach</h5>
              <p>Providing educational resources and Support programs.</p>
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="images/hpimg49.jpg"
                alt="Impact 3"
                className="img-fluid rounded"
              />
              <h5 className="mt-2">Health &amp; Wellness</h5>
              <p>Organizing health awareness campaigns and wellness workshops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Carousel Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Highlights</h2>
          <HorizontalCarousel />
        </div>
      </section>

      {/* Ongoing Efforts Section */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        <div className="container">
          <h2 className="mb-4">Our Ongoing Efforts</h2>
          <p className="mb-4">
            Stay connected with our upcoming activities and see how you can contribute further!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">Eyorika | Made with 💗 by Jr.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
