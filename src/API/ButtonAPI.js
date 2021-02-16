import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://serverAPI.com/api/1.0/',
    withCredentials: true,
});

export const buttonAPI = {
    getStatus() {
        return instance.get(`buttonAPI`)
    },
    updateStatus(status) {
        return instance.put(`buttonAPI/status`, {status: status});
    }
}