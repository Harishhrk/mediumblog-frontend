import axiosInstance from "../instance";

const getAllData = async () => {
  try {
    const response = await axiosInstance.get("/getAll");
    console.log("11111111111" + response);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default getAllData;
