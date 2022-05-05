import api from "../api";

export const postApi = {
    createPost: (params) => {
        const url = "/post/create";
        return api.post(url, { ...params })
    },

    getOwnPost: (idUser) => {
        const url = `/post/${idUser ? idUser : ""}`;
        return api.get(url);
    }
}