import api from "../api";

export const authApi = {
  register: (params) => {
    const url = '/auth/register';
    delete params.confirmPassword;
    return api.post(url, { ...params });
  },
  login: (params) => {
    const url = "/auth/login";
    return api.post(url, {...params});
  },

  checkJwt: (params) => {
    const url = "/auth/profile";
    return api.post(url, {...params});
  },

  
}