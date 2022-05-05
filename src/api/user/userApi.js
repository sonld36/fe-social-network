import api from "../api";

export const userApi = {
    getUser: (userId) => {
        const url = `/user/profile/${userId}`;
        return api.get(url);
    }
}

export const fileApi = {
    postBanner: (file) => {
        const url = "/user/upload-banner";
        // console.log("file", file);

        return api.post(url, file);
    },

    postAvatar: (file) => {
        const url = "/user/upload-avatar";

        return api.post(url, file);
    }

}

export const searchApi = {
    searchUser: (name) => {
        const url = "/user/search";
        return api.get(url, { params: { name } });
    } 
}