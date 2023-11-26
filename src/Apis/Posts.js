import api from "./Api";

export const fetchPosts = async () => {
  const response = await api.get("/posts/");
  return response.data;
};

export const createPosts = async (content, image, author) => {
  console.log('log de img',image)
  const response = await api.post("/posts", { content, image, author });
  return response.data;
};
