import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:8000";

const notify = (message) =>
  toast.error(message, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export const signupAuthentication = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    notify(error.data.error);
  }
};

export const loginAuthentication = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data)
  } catch (error) {
    notify(error.response.data.error);
  }
};

export const paywithpaytm = async (data) => {
  try {
    return await axios.post(`${URL}/payment`, data);
  } catch (error) {
    notify(error.message);
  }
};

export const wishlistClick = async (data) => {
  try {
    return await axios.put(`${URL}/like`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    notify(error);
  }
};

export const wishlistClickFalse = async (data) => {
  try {
    return await axios.put(`${URL}/unlike`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const address = async (data) => {
  try {
    return await axios.post(`${URL}/address`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    notify(error.response);
  }
};

export const getaddress = async () => {
  try {
    return await axios.get(`${URL}/address`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const deleteAddress = async (id) => {
  try {
    return await axios.delete(`${URL}/deleteAddress/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const UpdateProfile = async (data) => {
  try {
    return await axios.put(`${URL}/update/Profile`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("jwt");
    if (!token) return Promise.reject("cannot find token");
    return await axios.get(`${URL}/user}`, {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    return error;
  }
};

export const deactivate = async (data) => {
  try {
    return await axios.delete(`${URL}/deactivate/${data}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    notify(error.response.data.error);
  }
};

export const addTocart = async (data) => {
  try {
    return await axios.post(`${URL}/cart`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const getCart = async () => {
  try {
    return await axios.get(`${URL}/cart`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const IncrementQuantity = async (data) => {
  try {
    return await axios.put(`${URL}/cartIncrement`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};
export const DecrementQuantity = async (data) => {
  try {
    return await axios.put(`${URL}/cartDecrement`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const DeleteCartItem = async (data) => {
  try {
    return await axios.put(`${URL}/UpdateCart`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const addToSave = async (data) => {
  try {
    return await axios.post(`${URL}/save`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};
export const getSaveItem = async () => {
  try {
    return await axios.get(`${URL}/save`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const DeleteSaveItem = async (data) => {
  try {
    return await axios.put(`${URL}/UpdateSave`, data, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};

export const ClearCart = async () => {
  try {
    return await axios.delete(`${URL}/clearCart`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  } catch (error) {
    return error;
  }
};
