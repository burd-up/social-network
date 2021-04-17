import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "82c57b20-4280-4423-82e4-65126ef1fced"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data.resultCode;
        })
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const headerAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
}