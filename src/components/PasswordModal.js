import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PasswordModal = ({ showModal, handleClose, grantAccess }) => {
    console.log("Modal running")

    const correctPassword = process.env.REACT_APP_CORRECT_PASSWORD;
    const [password, setPassword] = useState('');


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleEnterClick = () => {
       
        if (password === correctPassword) {
          grantAccess();
          console.log("correct password entered ✅");

        } else {
          alert('Incorrect password. Please try again.');
        }
      };

      const handleKeyDown = (e) => {
        // Close the modal when the user presses "Enter" on the last input field
        if (e.key === 'Enter' && e.target.tagName.toLowerCase() === 'input') {
          handleEnterClick();
        }
      };

    return (
      <Modal show={showModal} onHide={handleClose} onKeyDown={handleKeyDown}>
      
        <Modal.Header closeButton>
          <Modal.Title>Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dojo password...</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              
            />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEnterClick}>
            Enter
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
}

export default PasswordModal;