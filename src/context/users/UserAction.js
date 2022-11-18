import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Login ,register,logout and authentication
export const logoutUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/logout");
    return res.data;
  } catch (err) {
    return { success: false, data: {} };
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      email: email,
      password: password,
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

export const registerUser = async (
  firstName,
  lastName,
  email,
  phone,
  aadhar,
  password
) => {
  try {
    const res = await axiosInstance.post("/auth/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      aadhar: aadhar,
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

export const authenticate = async () => {
  try {
    const res = await axiosInstance.get("/auth/authenticate");
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//getting user profile
export const getUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//updating user profile
export const updateUser = async (firstName, lastName, email, phone, aadhar) => {
  try {
    const res = await axiosInstance.put("/auth/me", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      aadhar: aadhar,
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//Creating health record
export const createRecord = async (heartRate, pulse, bp, saturation) => {
  try {
    const res = await axiosInstance.post("/records", {
      heartRate: heartRate,
      pulse: pulse,
      bp: bp,
      saturation: saturation,
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//getting records
export const getHealthRecords = async (searchTarget) => {
  try {
    const res = await axiosInstance.get(
      `/records?sort=name&search=${searchTarget}`
    );
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//getting all the sessions of the user
export const getActiveSessions = async () => {
  try {
    const res = await axiosInstance.get(`/auth/sessions`);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//terminatinga all sessions of the user
export const terminateSessions = async () => {
  try {
    const res = await axiosInstance.delete(`/auth/sessions`);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

//terminatinga  session
export const terminateSession = async (sessionId) => {
  try {
    const res = await axiosInstance.delete(`/auth/sessions/${sessionId}`);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};
