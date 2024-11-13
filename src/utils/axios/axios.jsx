import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: `http://109.123.232.93:8208/api/`,
})

export default axiosInstance
