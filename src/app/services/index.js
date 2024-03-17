import axiosInstance from "../instance";

const login = async (payload) => {
  try {
    const response = await axiosInstance.post("/login", payload);
    const token = response.data.token;
    localStorage.setItem("token", token);
    // Save the token in the headers of the Axios instance
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return response;
  } catch (error) {
    console.error({ error: error?.response?.data });
    alert(JSON.stringify(error?.response?.data));
  }
};

export default login;
