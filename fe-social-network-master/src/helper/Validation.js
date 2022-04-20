import * as zxcvbn from 'zxcvbn';

export const minMaxLength = (text, minLength, maxLength) => {
  let result = !text || text.length < minLength;
  if (maxLength) {
    result = result || text.length < minLength;
  }
  return result;
}

export const validEmail = (text) => {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return !regex.test(text);
}

export const passwordStrength = (text) => {
  const regex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%&?~]{8,}$/
  );
  return !regex.test(text);
}


export const validateConfirmPassword = (
  password,
  confirmpassword,
  formErrors
) => {
  formErrors = formErrors || {};

  // console.log(password, "===", confirmpassword);
  if (password !== confirmpassword) {
    formErrors.messageErrorConfirm =
      'Confirmed password is not matching with password';
    return true;
  } else {
    delete formErrors.confirmpassword;
    return false;
  }
}