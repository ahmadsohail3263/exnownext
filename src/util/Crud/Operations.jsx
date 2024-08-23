import axios from "axios";
import { apiRequest } from "../API/ApiRequest";
// import { handleError } from "../Handling/handleError";
// import { handleSuccess } from "../Handling/handleSuccess";

export const fetch = async (API, Token) => {
  try {
    return await apiRequest(API, "GET", Token);
  } catch (err) {
    // handleError(err);
  }
};

export const remove = async (API, Token) => {
  try {
    const res = await apiRequest(API, "DELETE", Token);
    // handleSuccess("Deleted Successfully");
  } catch (err) {
    // handleError(err);
  }
};

export const create = async (API, Token, form) => {
  try {
    const res = await apiRequest(API, "POST", Token, form);
    if (!Token) {
      // handleSuccess("Log in Successfully");
    }
    return res;
  } catch (err) {
    throw err;
  }
};

export const update = async (API, Token, form) => {
  try {
    await apiRequest(API, "PUT", Token, form);
  } catch (err) {
    throw err;
  }
};

export const patchUpdate = async (API, Token, form) => {
  try {
    await apiRequest(API, "PATCH", Token, form);
  } catch (err) {
    throw err;
  }
};

export const fileUpload = async (API, Token, form) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${API}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    throw  err.response.data;
  }
};

export const CreatefileUpload = async (API, Token, form) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${API}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err)
    throw  err.response.data;
  }
};