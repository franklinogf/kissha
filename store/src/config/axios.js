import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://kissha-api.herokuapp.com",
    withCredentials: true
})

export default axiosClient