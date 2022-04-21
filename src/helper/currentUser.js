export const getCurrentUser = () => {
    const userResponse = localStorage.getItem("user");
    const {firstname, lastname, email, role, _id} = userResponse;
    return {
        idUser: _id,
        firstName: firstname,
        lastName: lastname,
        email: email,
        role
    }
}

export const getJwtUser = () => {
    return localStorage.getItem("jwt");
}