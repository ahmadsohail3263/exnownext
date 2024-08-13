import axios from "axios";
export async function apiRequest(url, method, token, data) {
  const config = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // API base URL
    method, // Method Name [GET, POST, PUT, DELETE]
    url, // API End Point URl
    data, // Data to send with request (optional)
    headers: {
      // Authentication Token
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error("API Request Error:", err.response.status, err.response.data);
    if (err.response.status === 401) {
      sessionStorage.removeItem("token");
      localStorage.clear();
      throw err.response.data;
    }
    throw err.response.data;
  }
}
