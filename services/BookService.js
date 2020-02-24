import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});


const BASE_URL = '//localhost:3000/book'

export default {
    get,
    getById,
    save,
    remove,
}



async function get() {
    const { data } = await axios.get(BASE_URL)
    return data || [];
}

async function getById(bookId) {
    const { data } = await axios.get(`${BASE_URL}/${bookId}`)
    return data
}

async function save(book) {
    if (book._id) {
        const { data } = await axios.put(`${BASE_URL}/${book._id}`, book)
        return data
    } else {
        const { data } = await axios.post(`${BASE_URL}`, book)
        return data
    }
}

async function remove(bookId) {
    await axios.delete(`${BASE_URL}/${bookId}`)
}

