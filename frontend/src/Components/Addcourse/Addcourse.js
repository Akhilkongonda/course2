import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function Example({ show, handleClose }) {
  const [courseData, setCourseData] = useState({
    courseID: '',
    title: '',
    description: '',
    courseTags: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSaveChanges = async() => {
    // Logic to save course data
    console.log(courseData);
    try{
  await  axios.post('http://localhost:4000/add/course',courseData)
    .then(response => {
      console.log(response.data);
      handleClose();
    })    
    }catch(error){    
      console.log(error);

    }
 

  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="courseID">
            <Form.Label>Course ID</Form.Label>
            <Form.Control
              type="text"
              name="courseID"
              value={courseData.courseID}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="courseTags">
            <Form.Label>Course Tags</Form.Label>
            <Form.Control
              type="text"
              name="courseTags"
              value={courseData.courseTags}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Addcourse() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Add new course
      </Button>
      <Example show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default Addcourse;
