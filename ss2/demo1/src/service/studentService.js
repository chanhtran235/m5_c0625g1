
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
    return [...studentList];
}