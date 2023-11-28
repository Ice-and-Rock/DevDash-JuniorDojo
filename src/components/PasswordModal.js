import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PasswordModal = ({ showModal, handleClose, grantAccess }) => {
    console.log("Modal running")

    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleEnterClick = () => {
       
        if (password === '1234') {
          grantAccess();
          console.log("correct password entered ✅");

        } else {
          alert('Incorrect password. Please try again.');
        }
      };

    return (
      <Modal show={showModal} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title>Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter password...</Form.Label>
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