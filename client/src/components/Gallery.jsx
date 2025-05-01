import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  // Define  with arrays of image paths.
  const gallerySections = [
    {
      title: 'Memories',
      images: [
        '/images/0ldimg1.jpg',
        '/images/oldimg3.jpg',
        '/images/oldimg4.jpg',
        '/images/oldimg5.jpg',
        '/images/oldimg6.jpg',
        '/images/oldimg9.jpg',
        '/images/oldimg42.jpg',
        '/images/oldimg43.jpg',
        '/images/oldimg4.jpg',
        '/images/oldimg5.jpg',
        '/images/oldimg77.jpg',
        '/images/oldimg78.jpg'
     
      ],
    },
    {
      title: 'Celebration',
      images: [
        '/images/aimg17.jpg',
        '/images/aimg18.jpg',
        '/images/img15.jpg',
        '/images/img15.jpg',
        '/images/aimg86.jpg',
        '/images/aimg87.jpg',
        '/images/aimg88.jpg',
        '/images/aimg89.jpg',

      ],
    },
    {
      title: 'Random trip pics',
      images: [
        '/images/timg1.jpg',
        '/images/timg11.jpg',
        '/images/timg12.jpg',
        '/images/timg13.jpg',
        '/images/timg14.jpg',
        '/images/timg20.jpg',
        '/images/timg21.jpg',
        '/images/trimg24.jpg',
        
      ],
    },
    ,
    {
      title: 'Then and Now',
      images: [
        '/images/img26.jpg',
        '/images/nbimg25.jpg',
        '/images/nbimg27.jpg',
        '/images/nbimg30.jpg',
        '/images/nbimg31.jpg',
        '/images/nbimg32.jpg',
        '/images/nbimg33.jpg',
        '/images/nbimg34.jpg',
        '/images/nbimg40.jpg',
        '/images/nbimg41.jpg',
        '/images/nbimgab.jpg',
        '/images/nbimg35.jpg',
        '/images/nbimg37.jpg',
        '/images/nbimg38.jpg',
        '/images/nbimg39.jpg'





      ],
    },
  ];

  // State to control the modal lightbox, with the selected image.
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <Container className="gallery py-5">
      {gallerySections.map((section, index) => (
        <div key={index} className="gallery-section mb-5">
          <h2 className="mb-4 text-center">{section.title}</h2>
          <Row>
            {section.images.map((img, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="gallery-card" onClick={() => handleImageClick(img)} style={{ cursor: 'pointer' }}>
                  <Card.Img
                    variant="top"
                    src={img}
                    alt={`${section.title} ${idx + 1}`}
                    className="fixed-gallery-img"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {/* Modal for enlarged image view */}
      <Modal show={showModal} onHide={handleModalClose} centered size="lg">
        <Modal.Body className="p-0">
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;
