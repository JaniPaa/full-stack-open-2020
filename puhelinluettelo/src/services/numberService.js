import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(url)
}

const create = newObject => {
    return axios.post(url, newObject)
}

const update = (id, newObject) => {
    const request = axios.put(`${url}/${id}`, newObject)
    return request.then(response => {
        return response.data
    })
}

const deleteNumber = (id) => {
    return axios.delete(`${url}/${id}`)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    deleteNumber: deleteNumber
}