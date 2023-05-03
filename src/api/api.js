import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '744df802-958f-4b04-a8f8-aaceb9fa657a'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data.resultCode);
    },
    follow(id) {
        return instance
            .post(`follow/${id}`, {})
            .then(response => response.data.resultCode);
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI')
        return ProfileAPI.getProfile(userId);
    }
};

export const ProfileAPI = {
    getProfile(userId){
        return instance
            .get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance
            .get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance
            .put(`profile/status`, {status: status});
    }
}

export const AuthAPI = {
    authMe(){
        return instance
            .get(`auth/me`);
    },
    login(email, password, rememberMe){
        return instance
            .post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance
            .delete('auth/login');
    }
}

