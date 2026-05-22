// // ==========================================
// // REACT QUERY (TANSTACK QUERY) CHEAT SHEET
// // ==========================================

// // INSTALL
// // npm install @tanstack/react-query

// // ==========================================
// // SETUP QUERY CLIENT
// // ==========================================

// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       refetchOnWindowFocus: false,
//       staleTime: 1000 * 60 * 5, // 5 mins
//     },
//   },
// });

// // main.tsx / index.tsx

// /*
// <QueryClientProvider client={queryClient}>
//   <App />
// </QueryClientProvider>
// */

// // ==========================================
// // BASIC FETCH (GET)
// // ==========================================

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchUsers = async () => {
//   const response = await axios.get(
//     "http://localhost:5000/api/users"
//   );

//   return response.data;
// };

// const Users = () => {
//   const {
//     data,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//   });

//   if (isLoading) return <h1>Loading...</h1>;

//   if (isError) {
//     return <h1>{(error as Error).message}</h1>;
//   }

//   return (
//     <div>
//       <button onClick={() => refetch()}>
//         Refetch
//       </button>

//       {data.map((user: any) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // FETCH WITH PARAMS
// // ==========================================

// const fetchUser = async (id: string) => {
//   const response = await axios.get(
//     `http://localhost:5000/api/users/${id}`
//   );

//   return response.data;
// };

// const User = ({ id }: { id: string }) => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["user", id],
//     queryFn: () => fetchUser(id),
//     enabled: !!id,
//   });

//   if (isLoading) return <p>Loading...</p>;

//   return <div>{data.name}</div>;
// };

// // ==========================================
// // POST DATA (CREATE)
// // ==========================================

// import {
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";

// const createUser = async (userData: any) => {
//   const response = await axios.post(
//     "http://localhost:5000/api/users",
//     userData
//   );

//   return response.data;
// };

// const AddUser = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: createUser,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },

//     onError: (error) => {
//       console.log(error);
//     },
//   });

//   const handleSubmit = () => {
//     mutation.mutate({
//       name: "Kurt",
//       email: "kurt@gmail.com",
//     });
//   };

//   return (
//     <button onClick={handleSubmit}>
//       Add User
//     </button>
//   );
// };

// // ==========================================
// // UPDATE DATA (PUT/PATCH)
// // ==========================================

// const updateUser = async ({
//   id,
//   userData,
// }: {
//   id: string;
//   userData: any;
// }) => {
//   const response = await axios.put(
//     `http://localhost:5000/api/users/${id}`,
//     userData
//   );

//   return response.data;
// };

// const UpdateUser = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: updateUser,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },
//   });

//   const handleUpdate = () => {
//     mutation.mutate({
//       id: "1",
//       userData: {
//         name: "Updated Name",
//       },
//     });
//   };

//   return (
//     <button onClick={handleUpdate}>
//       Update User
//     </button>
//   );
// };

// // ==========================================
// // DELETE DATA
// // ==========================================

// const deleteUser = async (id: string) => {
//   const response = await axios.delete(
//     `http://localhost:5000/api/users/${id}`
//   );

//   return response.data;
// };

// const DeleteUser = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: deleteUser,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },
//   });

//   return (
//     <button
//       onClick={() => mutation.mutate("1")}
//     >
//       Delete User
//     </button>
//   );
// };

// // ==========================================
// // LOADING & ERROR STATES FOR MUTATION
// // ==========================================

// const mutation = useMutation({
//   mutationFn: createUser,
// });

// mutation.isPending;
// mutation.isSuccess;
// mutation.isError;
// mutation.error;

// // ==========================================
// // ASYNC/AWAIT MUTATION
// // ==========================================

// const handleCreate = async () => {
//   try {
//     const data = await mutation.mutateAsync({
//       name: "Kurt",
//     });

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // ==========================================
// // QUERY OPTIONS
// // ==========================================

// useQuery({
//   queryKey: ["users"],

//   queryFn: fetchUsers,

//   enabled: true,

//   staleTime: 1000 * 60 * 5,

//   gcTime: 1000 * 60 * 10,

//   retry: 3,

//   refetchOnWindowFocus: false,

//   refetchOnMount: true,

//   refetchInterval: 5000,
// });

// // ==========================================
// // PAGINATION
// // ==========================================

// const fetchPaginatedUsers = async (
//   page: number
// ) => {
//   const response = await axios.get(
//     `http://localhost:5000/api/users?page=${page}`
//   );

//   return response.data;
// };

// const UsersPagination = ({
//   page,
// }: {
//   page: number;
// }) => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["users", page],

//     queryFn: () =>
//       fetchPaginatedUsers(page),
//   });

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div>
//       {data.users.map((user: any) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // DEPENDENT QUERY
// // ==========================================

// const { data: user } = useQuery({
//   queryKey: ["user"],
//   queryFn: getUser,
// });

// const { data: posts } = useQuery({
//   queryKey: ["posts", user?.id],

//   queryFn: () => getPosts(user.id),

//   enabled: !!user?.id,
// });

// // ==========================================
// // PREFETCH QUERY
// // ==========================================

// queryClient.prefetchQuery({
//   queryKey: ["users"],

//   queryFn: fetchUsers,
// });

// // ==========================================
// // MANUAL CACHE UPDATE
// // ==========================================

// queryClient.setQueryData(
//   ["users"],
//   (oldData: any) => {
//     return [...oldData, newUser];
//   }
// );

// // ==========================================
// // REMOVE CACHE
// // ==========================================

// queryClient.removeQueries({
//   queryKey: ["users"],
// });

// // ==========================================
// // RESET CACHE
// // ==========================================

// queryClient.resetQueries({
//   queryKey: ["users"],
// });

// // ==========================================
// // COMMON REAL-WORLD PATTERN
// // ==========================================

// // services/userService.ts

// export const getUsers = async () => {
//   const response = await axios.get("/users");

//   return response.data;
// };

// export const createUser = async (
//   userData: any
// ) => {
//   const response = await axios.post(
//     "/users",
//     userData
//   );

//   return response.data;
// };

// // hooks/useUsers.ts

// export const useUsers = () => {
//   return useQuery({
//     queryKey: ["users"],
//     queryFn: getUsers,
//   });
// };

// // hooks/useCreateUser.ts

// export const useCreateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: createUser,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },
//   });
// };

// // ==========================================
// // EXPRESS.JS BACKEND EXAMPLE
// // ==========================================

// // GET USERS

// /*
// app.get("/api/users", async (req, res) => {
//   const users = await User.find();

//   res.json(users);
// });
// */

// // GET SINGLE USER

// /*
// app.get("/api/users/:id", async (req, res) => {
//   const user = await User.findById(
//     req.params.id
//   );

//   res.json(user);
// });
// */

// // CREATE USER

// /*
// app.post("/api/users", async (req, res) => {
//   const user = await User.create(req.body);

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
// // TYPESCRIPT TYPES
// // ==========================================

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// const fetchTypedUsers = async (): Promise<
//   User[]
// > => {
//   const response = await axios.get<User[]>(
//     "http://localhost:5000/api/users"
//   );

//   return response.data;
// };

// const { data } = useQuery<User[]>({
//   queryKey: ["users"],
//   queryFn: fetchTypedUsers,
// });

// // ==========================================
// // MOST IMPORTANT THINGS TO REMEMBER
// // ==========================================

// // useQuery -> GET data
// // useMutation -> POST PUT PATCH DELETE
// // queryKey -> unique cache name
// // queryFn -> function that fetches data
// // invalidateQueries -> refetch data
// // enabled -> conditional query
// // mutate -> trigger mutation
// // mutateAsync -> async/await mutation