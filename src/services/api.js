import Axios from 'axios';

const api =  Axios.create({
    baseURL: "https://guarded-beach-59745.herokuapp.com"
})

export default api;