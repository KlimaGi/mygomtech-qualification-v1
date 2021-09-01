export const usernameValidation = (username: string, setUsernameErr) => {
  if (username.length == 0) {
    return setUsernameErr("Your username is required.");
  } else if (/[!@#$%&*?]/.test(username)) {
    return setUsernameErr("Your username can not have this speacial character");
  } else if (username.length <= 3) {
    return setUsernameErr("Your username should have at least 3 letters.");
  }
};

export const passwordValidation = (password: string, setPasswordErr) => {
  if (password.length == 0) {
    return setPasswordErr("Password is required.");
  } else if (password.length <= 3) {
    return setPasswordErr("Your password should be longer.");
  }
};
