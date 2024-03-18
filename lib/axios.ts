import axios from "axios";

const baseUrl = process.env.BASE_URL;

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    common: {},
  },
});

// // Add an interceptor for outgoing requests
// http.interceptors.request.use((config: any) => {
// GET TOKEN TO BE USED GLOBALLY
//   const token = sessionStorage.getItem("spv-token");
//   let hasTokenExpired = false;
// if (token) {
//   const decoded_token: JwtPayload = jwt_decode(token);
//   const dateNow = new Date();
//   if (decoded_token?.exp < dateNow.getTime() / 1000) {
//     hasTokenExpired = true;
//   }
// }
//   if (hasTokenExpired) {
//     const refreshToken = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/users/auth/refresh`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const { data } = response.data;
//         sessionStorage.setItem("spv-token", data.token);
//         config.headers["Authorization"] = `Bearer ${data.token}`;
//         return config;
//       } catch (error: any) {
//         if (error.response.status === 401) {
//           // Clear all Cookies
//           // return navigateTo("/login");
//         }
//       }
//     };
//     refreshToken();
//   } else {
//     // MODIFYING HEADERS
//     config.headers["Authorization"] = `Bearer ${token}`;
//     return config;
//   }
// });

// // Add an interceptor for responses
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error responses
    if (
      error.response.status === 401 &&
      error.response.data.message === "Unauthenticated."
    ) {
      // Clear all Cookies
      // return navigateTo("/login");
    }

    if (
      error.response.status === 401 &&
      error.response.data.message === "Authorization failed. Token is Invalid"
    ) {
      // Clear all Cookies
      // return navigateTo("/login");
    }

    if (
      error.response.status === 500 &&
      error.response.data.message === "Server error"
    ) {
      // Clear all Cookies
      // return navigateTo("/login");
    }

    if (
      error.response.status === 401 &&
      error.response.data.message === "Authorization failed. Token is Expired"
    ) {
      // Clear all Cookies
      // return navigateTo("/login");
    }

    return Promise.reject(error);
  }
);

export default http;
