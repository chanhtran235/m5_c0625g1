import {addNew, getAll} from "../service/studentService.js";
import {useRef, useState} from "react";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import * as Yup from "yup";
const AddComponent =()=>{
    const [student,setStudent] = useState({
        id:"",
        name:""
    })
    const navigate = useNavigate();

    const handleAdd = (values) => {
        console.log(values);
        addNew(values);
        toast.success("Thêm mới thành công",{
            position:"top-right",
            theme:"dark",
            autoClose: 500
        });
        navigate("/students");
    }
    const validation = Yup.object({
        id: Yup.number().typeError('Yêu cầu nhập số')
            .required('Id không để trống')
            .min(1,'Id phải lớn hơn1')
            .max(100,"Id phải nhỏ hơn 100"),
        name:Yup.string().required('Tên không để trống')
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Tên không đúng định dạng')
    })

    return(
        <>
            <Formik initialValues={student}
                    onSubmit={handleAdd}
                    validationSchema={validation}
            >
            <Form>
                <div>
                    <label>ID</label>
                    <Field type = "text" name={"id"}/>
                    <ErrorMessage className={'text-danger'} name={'id'} component={'small'}/>
                </div>
                <div>
                    <label>Name</label>
                    <Field type = "text" name={"name"}/>
                    <ErrorMessage className={'text-danger'} name={'name'} component={'small'}/>
                </div>

                <Button className={'btn-success btn-sm btn'} type={'submit'}>Thêm mới</Button>
            </Form>
            </Formik>
        </>
    );
}
export default AddComponent;