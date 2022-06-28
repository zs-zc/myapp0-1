import axios from "axios"
import store from "@/store"
import { getToken } from "./auth"
import { Message, MessageBox } from "element-ui"

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['x-Token'] = getToken()
        }
        return config
    },
    err => {
        console.log(err);
        return Promise.reject(err)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data

        if (res.code !== 20000) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })

                })
                return Promise.reject(new Error(res.message || 'Error'))
            }
        } else {
            return res
        }
    },
    err => {
        console.log(err);
        Message({
            message: err.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(err)

    }
)

export default service