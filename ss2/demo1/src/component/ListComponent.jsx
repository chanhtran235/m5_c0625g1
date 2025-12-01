import {getAll} from "../service/studentService.js";
import React from "react";

function ListComponent(){
    return(
        <>
            <h1 style={{color:"yellow"}}>Danh sách sinh viên</h1>
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>STT</td>
                    <td>ID</td>
                    <td>Name</td>
                </tr>
                </thead>
                <tbody>
                {
                    getAll().map((student, i) => (
                        <tr key={student.id}>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default ListComponent ;