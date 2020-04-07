import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': 'acf695aa-1787-4f4c-b271-5b3401d34901'
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
            .then(response => {
                return response.data
            })
        },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)      
      
    }
}


export const getUsers2 = (currentPage, pageSize) => {
    return axios.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }