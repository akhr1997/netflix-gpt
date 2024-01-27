export const validateData = (email, password) => {
  //   const isNamevalid = /^[a-zA-Z ]{2,30}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  //   if (!isNamevalid) return "Invalid Name";
  if (!isEmailValid) return "Invalid Email Adrress";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
