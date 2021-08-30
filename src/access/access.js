import axios from "axios";


export function addEmployee(firstName, lastName, setSuccess){
    axios({
        method: 'post',
        url: 'http://localhost:3000/api/v1/persons',
        data: {firstName, lastName}
    })
}

export function updEmployee(id, fname, lname){
    axios({
        method: 'put',
        url: `http://localhost:3000/api/v1/persons/${id}`,
        data: {
            firstName: fname,
            lastName: lname
        } 
    })
}

export function deleteEmployee(id){
    axios({
        method: 'delete',
        url: `http://localhost:3000/api/v1/persons/${id}`
    })
}