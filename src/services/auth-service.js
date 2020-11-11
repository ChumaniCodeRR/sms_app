import axios from 'axios';

export const userService = {
    login,
    logout,
    resetPassword
};

function login(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };

    return axios.post(`/users/authenticate`, requestOptions)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function resetPassword(email){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email})
    };

    return axios.post(`/users/reset-password`, requestOptions)
        .then(user => {

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}