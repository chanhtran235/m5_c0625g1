import {useEffect, useRef, useState} from "react";
import {addNew, getAll} from "../service/studentService.js";
import DeleteComponent from "./DeleteComponent.jsx";


const ListComponent = () => {
    // useState
    const [studentList, setStudentList] = useState(null);
    const [deleteStudent, setDeleteStudent] = useState({id: 0, name: "no name"});
    const [showModal, setShowModal] = useState(false);
    const [reloading, setReloading] = useState(false);

    const idRef = useRef(null);
    const nameRef = useRef(null);
    useEffect(() => {
        console.log("----effect---run---")
        setStudentList(getAll())
    }, [reloading]);
    const handleShowModal = (student) => {
        setDeleteStudent(student);
        setShowModal(true);
    }

    const closeModal = () => {
        setReloading(pre => !pre);
        setShowModal(false);
    }
    const handleAdd = () => {
        const id = idRef.current.value;
        const name = nameRef.current.value;
        const newStudent = {
            id: id,
            name: name
        }
        addNew(newStudent);
        console.log(getAll());
        setReloading(pre => !pre);

    }

    return (
        <>
            {console.log("-------list----------")}
            <form>
                ID: <input ref={idRef} name={"id"}/>
                Name: <input ref={nameRef} name={"name"}/>
                <button onClick={handleAdd} type={'button'}>Thêm mới</button>
            </form>
            <h1 style={{color: "yellow"}}>Danh sách sinh viên</h1>
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>STT</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Delete</td>
                </tr>
                </thead>
                <tbody>
                {
                   studentList && studentList.map((student, i) => (
                        <tr key={student.id}>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <button onClick={() => {
                                    handleShowModal(student)
                                }} className={'btn btn-sm btn-danger'}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            {showModal &&
                <DeleteComponent deleteStudent={deleteStudent}
                                           showModal={showModal}
                                           closeModal={closeModal}
                />
            }

        </>
    );
}
export default ListComponent;