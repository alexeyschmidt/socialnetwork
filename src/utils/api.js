const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getPostsList(page) {
        return fetch(`${this._baseUrl}/posts/paginate?page=${page}&limit=all`, {
            headers: this._headers,
        }).then(onResponse)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(onResponse)
    }

    getPostById(idPost) {
        return fetch(`${this._baseUrl}/posts/${idPost}`, {
            headers: this._headers,
        }).then(onResponse)
    }

    setUserInfo(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(dataUser),
        }).then(onResponse)
    }

    changeLikePost(postId, isLike) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: isLike ? 'DELETE' : 'PUT',
            headers: this._headers,
        }).then(onResponse)
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru/v2/DN',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA4NWE4OTRlZTQxOTk3NWZiZDJlZWEiLCJncm91cCI6IkROIiwiaWF0IjoxNjc4MjY5MTQ3LCJleHAiOjE3MDk4MDUxNDd9.blMfWXpvtILmDCTXFrmCYya2VZwAKC1rB5Q2kndKUQU'
    }
}

const api = new Api(config);

export default api;