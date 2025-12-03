import {Button, Modal} from "react-bootstrap";
import React from "react";
import {deleteById, getAll} from "../service/studentService.js";


const DeleteComponent = ({closeModal,deleteStudent,showModal})=>{
    const handleClose =()=>{
        // chưa code
        closeModal();

    }
   const handleDelete=()=>{

        deleteById(deleteStudent.id);
        console.log(getAll());
        closeModal();
        // xoá
    }
    return (
        <>
            {console.log("------modal delete-------------")}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn muốn xoá sinh viên <span className={'text-danger'}>{deleteStudent.name}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default DeleteComponent ;