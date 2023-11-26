import api from "./Api";

export const validateUserEmail = async (email) => {
  const response = await api.get("/users/" + email);
  return response.data;
};
