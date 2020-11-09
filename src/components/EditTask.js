import React, {useState} from 'react';
import {Modal, Button, FormControl} from "react-bootstrap"
import { EditTodo } from '../redux/Actions';
import {useDispatch} from "react-redux"


const EditTask = ({el}) => {
    const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edit, setEdit] = useState(el.description);
    return (
        <>
      <Button variant="primary" onClick={()=>{handleShow();setEdit(el.description)}}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl 
            value={edit} 
            onChange={(e)=>setEdit(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();dispatch(EditTodo(el.id, edit))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default EditTask

