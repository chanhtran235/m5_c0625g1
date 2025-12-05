import axios from "axios";

const URL_BE = "http://localhost:3000";
// viết phương thức để callAPI
export async function getAll(){
    try{
        const response = await axios.get(`${URL_BE}/students`);
        return response.data;
    }catch (e) {
        console.log(e.message);
    }
    return [];

}

export async function addNew(student){
    // call API
    try{
        const response = await axios.post(`${URL_BE}/students`,student);
        return response.status === 201;
    }catch (e) {
        console.log(e.message);
    }
    return false;


}

export async function deleteById(id){
    // call API
    try{
        const response = await axios.delete(`${URL_BE}/students/${id}`);
        return response.status === 200;
    }catch (e) {
        console.log(e.message);
    }
    return false;

}