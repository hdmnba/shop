import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const http: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3333/',
})

http.interceptors.response.use(
    (ar: AxiosResponse) => {
        const { data } = ar
        if (data.meta.status !== 200 && data.meta.status !== 201) {
            ElMessage({
                type: 'error',
                showClose: true,
                message: data.meta.msg,
            })
        }
        return ar
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

export default http