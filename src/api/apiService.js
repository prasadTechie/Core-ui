import axiosInstance from "./axiosInstance";

export const getExampleData = async () => {
  const response = await axiosInstance.get("/example-endpoint");
  return response.data;
};
