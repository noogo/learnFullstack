import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(res => res.data)
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson).then(res => res.data)
}

const deleteOne = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, changePerson) => {
    return axios.put(`${baseUrl}/${id}`, changePerson).then(res => res.data)
}

export default { getAll, create, deleteOne, update }