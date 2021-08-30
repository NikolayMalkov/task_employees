import axios from "axios";

export function addEmployee(firstName, lastName){
    axios({
        method: 'post',
        url: 'http://localhost:3000/person',
        data: {firstName, lastName}
    })
}

export function updEmployee(id, fname, lname){
    axios({
        method: 'put',
        url: `http://localhost:3000/person/${id}`,
        data: {
            firstName: fname,
            lastName: lname
        } 
    })
}

export function deleteEmployee(id){
    axios({
        method: 'delete',
        url: `http://localhost:3000/person/${id}`
    })
}