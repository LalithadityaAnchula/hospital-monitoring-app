import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

//Getting stats

export const getPatinetRecords = async (name) => {
  try {
    const res = await axiosInstance.get(`/records?search=${name}`);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};
