import axios from "axios";

const URL_BE = "http://localhost:3000";
// viết phương thức để callAPI
export async function getAllClass(){
    try{
        const response = await axios.get(`${URL_BE}/classes`);
        return response.data;
    }catch (e) {
        console.log(e.message);
    }
    return [];

}