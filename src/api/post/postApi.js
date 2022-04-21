import api from "../api";

export const postApi = {
    createPost: (params) => {
        const url = "/post/create";
        return api.post(url, { ...params })
    },

    getOwnPost: () => {
        const url = "/post";
        return api.get(url);
    }
}