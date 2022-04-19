import api from "../api";

export const userApi = {
  register: (params) => {
    const url = '/auth/register';
    delete params.confirmPassword;
    return api.post(url, { ...params });
  }
}