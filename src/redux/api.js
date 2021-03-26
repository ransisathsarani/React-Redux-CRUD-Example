// import axiosHttp from "../../../../http/axiosHttp";
import axios from "axios";

const baseUrl = `http://localhost:8030/simpli5-asset-dev/asset-request`;

export const addData = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(`${baseUrl}/category/create`, data, config);
    return res.data;
  } catch (err) {
    return console.log(err.message);
  }
};

