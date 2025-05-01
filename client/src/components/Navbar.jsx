import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaTimes, FaUser } from 'react-icons/fa';
import AuthModal from './AuthModal';

const NavbarComponent = ({ user, onLogout, onAuth }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  // "isLogin" controls which form is shown—Login or Sign Up.
  const [isLogin, setIsLogin] = useState(true);
  
  // State for controlling navbar expansion (for mobile view)
  const [expanded, setExpanded] = useState(false);

  const handleOpenModal = (login) => {
    setIsLogin(login);
    setShowModal(true);
    setExpanded(false); // collapse navbar when opening modal
  };

  const handleCloseModal = () => setShowModal(false);

  const handleLogout = () => {
    onLogout();
    localStorage.removeItem('user');
    navigate('/');
    setExpanded(false); // collapse navbar on logout
  };

  // onSwitchToLogin will switch modal mode to login after a successful signup.
  const handleSwitchToLogin = () => {
    setShowModal(false);
    setIsLogin(true);
    setTimeout(() => setShowModal(true), 300);
  };

  return (
    <>
      <Navbar expanded={expanded} expand="lg" sticky="top" className="navbar-blur" style={{ padding: 0 }}>
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              navigate(user ? "/dashboard" : "/");
              setExpanded(false);
            }}
            style={{ cursor: "pointer", fontWeight: "bold", color: "purple" }}
          >
            Eyorika
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="small-toggler"
            // Override default toggler styles to remove grey border and outline.
            style={{ border: 'none', boxShadow: 'none', outline: 'none' }}
            onClick={() => setExpanded(expanded ? false : true)}
          >
            {/* When expanded, render a custom "X" icon styled in a purplish hue */}
            {expanded ? (
              <FaTimes
                size={20}
                color="purple"
                style={{
                  verticalAlign: 'middle',
                  margin: 'auto'
                }}
              />
            ) : null}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
            <Nav className="d-flex w-100 justify-content-center justify-content-lg-end text-center text-lg-end align-items-center">
              {user ? (
                <>
                  <Nav.Link as={NavLink} to="/dashboard" onClick={() => setExpanded(false)}>
                    Dashboard
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/donate" onClick={() => setExpanded(false)}>
                    Donate
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/gallery" onClick={() => setExpanded(false)}>
                    Gallery
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/goals" onClick={() => setExpanded(false)}>
                    About Us
                  </Nav.Link>
                  <Nav.Link className="d-flex align-items-center user-info" onClick={() => setExpanded(false)}>
                    <FaUser className="user-icon" />
                    <span className="username-text">{user.username}</span>
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout} className="logout-button">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => { handleOpenModal(true); setExpanded(false); }}>
                    Login
                  </Nav.Link>
                  <Nav.Link onClick={() => { handleOpenModal(false); setExpanded(true); }}>
                    Sign Up
                  </Nav.Link>
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
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default NavbarComponent;
