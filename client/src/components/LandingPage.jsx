import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import HorizontalCarousel from './HorizontalCarousel';
import AuthModal from './AuthModal';
import { Button } from 'react-bootstrap';

const LandingPage = ({ onAuth }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOpenModal = (login) => {
    setIsLogin(login);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Eyorika Voluntary Society</h1>
          <p className="lead">Empowering communities through voluntary actions and collective efforts.</p>

          <button onClick={() => handleOpenModal(false)} className="btn btn-secondary me-2 py-1">
         Join Us
        </button>
          <button onClick={() => handleOpenModal(true)} className="btn btn-primary py-1">
          Login
        </button>
       
        </div>
        <AuthModal
        show={showModal}
        handleClose={handleCloseModal}
        isLogin={isLogin}
        onAuth={onAuth}
      />
      </section>

      {/* Our Impact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Impact So Far</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="/images/hpimg46.jpg" alt="Impact 1" className="img-fluid rounded" />
              <h5 className="mt-2">Community Clean-up</h5>
              <p>Revitalizing neighborhoods through community clean-up events.</p>
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/hpimg49.jpg" alt="Impact 2" className="img-fluid rounded" />
              <h5 className="mt-2">Education Outreach</h5>
              <p>Providing educational resources and Support programs.</p>
            </div>
            <div className="col-md-4 mb-3">
              <img src="/images/hpimg47.jpg" alt="Impact 3" className="img-fluid rounded" />
              <h5 className="mt-2">Health &amp; Wellness</h5>
              <p>Organizing health awareness campaigns and wellness workshops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Auto‑Scrolling Images */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center text-white">Highlights</h2>
          <HorizontalCarousel />
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="container">
          <h2 className="mb-4">Make a Difference</h2>
          <p className="mb-4">
            Join our community and contribute to social change. Your effort matters!
          </p>
          <div className="mt-3 text-white">
          <Button className="text-white py-1" variant="info" onClick={() => handleOpenModal(false)}>
            Get Involved
          </Button>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">Eyorika | Made with ❤️ by Jr.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
