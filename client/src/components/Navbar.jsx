// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthModal from './AuthModal';

const NavbarComponent = ({ user, onLogout, onAuth }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOpenModal = (login) => {
    setIsLogin(login);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="navbar-blur" style={{ padding: 0 }}>
        <Container fluid>
          <Navbar.Brand
            onClick={() => navigate(user ? "/dashboard" : "/")}
            style={{ cursor: "pointer", fontWeight: "bold", color: "purple" }}
          >
            Eyorika
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="small-toggler" />
          <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
            <Nav className="d-flex w-100 justify-content-center justify-content-lg-end text-center text-lg-end align-items-center">
              {user ? (
                <>
                  <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={NavLink} to="/donate">Donate</Nav.Link>
                  <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
                  <Nav.Link as={NavLink} to="/goals">About us</Nav.Link>
                  <Nav.Link disabled>{user.email}</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleOpenModal(true)}>Login</Nav.Link>
                  <Nav.Link onClick={() => handleOpenModal(false)}>Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AuthModal
        show={showModal}
        handleClose={handleCloseModal}
        isLogin={isLogin}
        onAuth={onAuth}
      />
    </>
  );
};

export default NavbarComponent;
