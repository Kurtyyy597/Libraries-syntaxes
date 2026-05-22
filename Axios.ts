// // ==========================================
// // AXIOS CHEAT SHEET
// // ==========================================

// // INSTALL
// // npm install axios

// // ==========================================
// // IMPORT
// // ==========================================

// import axios from "axios";

// // ==========================================
// // BASIC GET REQUEST
// // ==========================================

// const getUsers = async () => {
//   const response = await axios.get("http://localhost:5000/api/users");

//   console.log(response.data);

//   return response.data;
// };

// // ==========================================
// // BASIC POST REQUEST
// // ==========================================

// const createUser = async () => {
//   const response = await axios.post("http://localhost:5000/api/users", {
//     name: "Kurt",
//     email: "kurt@gmail.com",
//   });

//   console.log(response.data);
// };

// // ==========================================
// // PUT REQUEST
// // ==========================================

// const updateUser = async () => {
//   const response = await axios.put("http://localhost:5000/api/users/1", {
//     name: "Updated Name",
//   });

//   console.log(response.data);
// };

// // ==========================================
// // PATCH REQUEST
// // ==========================================

// const patchUser = async () => {
//   const response = await axios.patch("http://localhost:5000/api/users/1", {
//     name: "Patched Name",
//   });

//   console.log(response.data);
// };

// // ==========================================
// // DELETE REQUEST
// // ==========================================

// const deleteUser = async () => {
//   const response = await axios.delete("http://localhost:5000/api/users/1");

//   console.log(response.data);
// };

// // ==========================================
// // REQUEST WITH PARAMS
// // ==========================================

// const getUser = async (id: string) => {
//   const response = await axios.get(`http://localhost:5000/api/users/${id}`);

//   return response.data;
// };

// // ==========================================
// // QUERY PARAMS
// // ==========================================

// const getPaginatedUsers = async () => {
//   const response = await axios.get("http://localhost:5000/api/users", {
//     params: {
//       page: 1,
//       limit: 10,
//     },
//   });

//   return response.data;
// };

// // ==========================================
// // HEADERS
// // ==========================================

// const getProtectedData = async () => {
//   const token = localStorage.getItem("token");

//   const response = await axios.get("http://localhost:5000/api/profile", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

// // ==========================================
// // CREATE AXIOS INSTANCE
// // ==========================================

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",

//   headers: {
//     "Content-Type": "application/json",
//   },

//   withCredentials: true,
// });

// // ==========================================
// // USING AXIOS INSTANCE
// // ==========================================

// const fetchUsers = async () => {
//   const response = await api.get("/users");

//   return response.data;
// };

// const addUser = async (data: any) => {
//   const response = await api.post("/users", data);

//   return response.data;
// };

// // ==========================================
// // REQUEST INTERCEPTOR
// // ==========================================

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   },
// );

// // ==========================================
// // RESPONSE INTERCEPTOR
// // ==========================================

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   (error) => {
//     if (error.response?.status === 401) {
//       console.log("Unauthorized");
//     }

//     return Promise.reject(error);
//   },
// );

// // ==========================================
// // TRY CATCH
// // ==========================================

// const fetchData = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/users");

//     return response.data;
//   } catch (error: any) {
//     console.log(error.response?.data);

//     console.log(error.message);
//   }
// };

// // ==========================================
// // ERROR HANDLING
// // ==========================================

// try {
//   const response = await axios.get("http://localhost:5000/api/users");
// } catch (error: any) {
//   if (axios.isAxiosError(error)) {
//     console.log(error.response);

//     console.log(error.response?.data);

//     console.log(error.response?.status);
//   }
// }

// // ==========================================
// // TYPESCRIPT TYPES
// // ==========================================

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// const getTypedUsers = async (): Promise<User[]> => {
//   const response = await axios.get<User[]>("http://localhost:5000/api/users");

//   return response.data;
// };

// // ==========================================
// // POST WITH TYPES
// // ==========================================

// type CreateUserData = {
//   name: string;
//   email: string;
// };

// const createTypedUser = async (userData: CreateUserData): Promise<User> => {
//   const response = await axios.post<User>(
//     "http://localhost:5000/api/users",
//     userData,
//   );

//   return response.data;
// };

// // ==========================================
// // FILE UPLOAD
// // ==========================================

// const uploadFile = async (file: File) => {
//   const formData = new FormData();

//   formData.append("file", file);

//   const response = await axios.post(
//     "http://localhost:5000/api/upload",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     },
//   );

//   return response.data;
// };

// // ==========================================
// // DOWNLOAD FILE
// // ==========================================

// const downloadFile = async () => {
//   const response = await axios.get("http://localhost:5000/api/file", {
//     responseType: "blob",
//   });

//   return response.data;
// };

// // ==========================================
// // TIMEOUT
// // ==========================================

// const timeoutApi = axios.create({
//   baseURL: "http://localhost:5000/api",

//   timeout: 5000,
// });

// // ==========================================
// // CANCEL REQUEST
// // ==========================================

// const controller = new AbortController();

// axios.get("http://localhost:5000/api/users", {
//   signal: controller.signal,
// });

// // Cancel request

// controller.abort();

// // ==========================================
// // MULTIPLE REQUESTS
// // ==========================================

// const getAllData = async () => {
//   const [users, posts] = await Promise.all([
//     axios.get("http://localhost:5000/api/users"),

//     axios.get("http://localhost:5000/api/posts"),
//   ]);

//   console.log(users.data);

//   console.log(posts.data);
// };

// // ==========================================
// // EXPRESS.JS BACKEND
// // ==========================================

// // GET USERS

// /*
// app.get("/api/users", async (req, res) => {
//   const users = await User.find();

//   res.json(users);
// });
// */

// // CREATE USER

// /*
// app.post("/api/users", async (req, res) => {
//   const user = await User.create(
//     req.body
//   );

//   res.status(201).json(user);
// });
// */

// // UPDATE USER

// /*
// app.put("/api/users/:id", async (req, res) => {
//   const updatedUser =
//     await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//   res.json(updatedUser);
// });
// */

// // DELETE USER

// /*
// app.delete("/api/users/:id", async (req, res) => {
//   await User.findByIdAndDelete(
//     req.params.id
//   );

//   res.json({
//     message: "User deleted",
//   });
// });
// */

// // ==========================================
// // REAL-WORLD API STRUCTURE
// // ==========================================

// // api/index.ts

// export const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,

//   withCredentials: true,
// });

// // ==========================================
// // services/userService.ts
// // ==========================================

// import { apiClient } from "./api";

// export const getUsers = async () => {
//   const response = await apiClient.get("/users");

//   return response.data;
// };

// export const getUserById = async (id: string) => {
//   const response = await apiClient.get(`/users/${id}`);

//   return response.data;
// };

// export const createUserService = async (data: any) => {
//   const response = await apiClient.post("/users", data);

//   return response.data;
// };

// export const updateUserService = async (id: string, data: any) => {
//   const response = await apiClient.put(`/users/${id}`, data);

//   return response.data;
// };

// export const deleteUserService = async (id: string) => {
//   const response = await apiClient.delete(`/users/${id}`);

//   return response.data;
// };

// // ==========================================
// // REACT QUERY + AXIOS
// // ==========================================

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// const useUsers = () => {
//   return useQuery({
//     queryKey: ["users"],

//     queryFn: getUsers,
//   });
// };

// const useCreateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: createUserService,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },
//   });
// };

// // ==========================================
// // AUTH LOGIN
// // ==========================================

// const login = async (email: string, password: string) => {
//   const response = await axios.post("http://localhost:5000/api/auth/login", {
//     email,
//     password,
//   });

//   localStorage.setItem("token", response.data.token);

//   return response.data;
// };

// // ==========================================
// // AUTH REGISTER
// // ==========================================

// const register = async (data: any) => {
//   const response = await axios.post(
//     "http://localhost:5000/api/auth/register",
//     data,
//   );

//   return response.data;
// };

// // ==========================================
// // LOGOUT
// // ==========================================

// const logout = () => {
//   localStorage.removeItem("token");
// };

// // ==========================================
// // ENV VARIABLES
// // ==========================================

// // VITE_API_URL=http://localhost:5000/api

// // ==========================================
// // MOST IMPORTANT THINGS TO REMEMBER
// // ==========================================

// // axios.get() -> GET request
// // axios.post() -> POST request
// // axios.put() -> UPDATE request
// // axios.patch() -> PARTIAL UPDATE
// // axios.delete() -> DELETE request
// // axios.create() -> reusable instance
// // interceptors -> request/response middleware
// // headers -> auth/token
// // params -> query params
// // response.data -> actual backend data
// // try/catch -> error handling
