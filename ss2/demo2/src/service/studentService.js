
const studentList = [
    {
        id: 1,
        name: "chánh"
    },
    {
        id: 2,
        name: "tiến"
    },
    {
        id: 3,
        name: "Hải heo"
    }
]
// viết phương thức để callAPI
export function getAll(){
    // call API
    return [...studentList];
}

export function addNew(student){
    // call API
    studentList.push(student);
}

export function deleteById(id){
    // call API
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id==id){
            studentList.splice(i,1);
            break;
        }
    }
}