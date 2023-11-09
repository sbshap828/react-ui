import api from "./apiConfig.js";
let url = "https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U&count=12"
export const getPods = async () => {
  try {
    const response = await api.get(url);
    return response.data;
    console.log(response)
  } catch (error) {
    console.error("Error: Getting 12 pods: ", error);
  }
};let url2 = "https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U&count=1"

export const getPod = async () => {
  try {
    const response = await api.get(url2)
    //const response = await api.get(`/pods/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Getting one Pod: ", error);
  }
};



