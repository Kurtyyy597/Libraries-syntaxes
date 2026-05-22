// // ==========================================
// // REACT HOOK FORM CHEAT SHEET
// // ==========================================

// // INSTALL
// // npm install react-hook-form

// // WITH ZOD
// // npm install @hookform/resolvers zod

// // ==========================================
// // IMPORTS
// // ==========================================

// import { useForm } from "react-hook-form";

// // ==========================================
// // BASIC FORM
// // ==========================================

// type FormData = {
//   name: string;
//   email: string;
// };

// const BasicForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("name")}
//         placeholder="Name"
//       />

//       <input
//         {...register("email")}
//         placeholder="Email"
//       />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // VALIDATIONS
// // ==========================================

// const ValidationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("username", {
//           required: "Username required",

//           minLength: {
//             value: 3,
//             message:
//               "Minimum 3 characters",
//           },
//         })}
//       />

//       {errors.username && (
//         <p>
//           {
//             errors.username.message as string
//           }
//         </p>
//       )}

//       <input
//         type="email"
//         {...register("email", {
//           required: "Email required",

//           pattern: {
//             value:
//               /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

//             message: "Invalid email",
//           },
//         })}
//       />

//       {errors.email && (
//         <p>
//           {errors.email.message as string}
//         </p>
//       )}

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // DEFAULT VALUES
// // ==========================================

// const DefaultValuesForm = () => {
//   const { register } = useForm({
//     defaultValues: {
//       name: "Kurt",
//       email: "kurt@gmail.com",
//     },
//   });

//   return (
//     <>
//       <input {...register("name")} />

//       <input {...register("email")} />
//     </>
//   );
// };

// // ==========================================
// // WATCH VALUES
// // ==========================================

// const WatchForm = () => {
//   const { register, watch } =
//     useForm();

//   const watchedName = watch("name");

//   console.log(watchedName);

//   return (
//     <input {...register("name")} />
//   );
// };

// // ==========================================
// // RESET FORM
// // ==========================================

// const ResetForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//   } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);

//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name")} />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // SET VALUE
// // ==========================================

// const SetValueForm = () => {
//   const {
//     register,
//     setValue,
//   } = useForm();

//   return (
//     <>
//       <input {...register("name")} />

//       <button
//         onClick={() =>
//           setValue("name", "Kurt")
//         }
//       >
//         Set Name
//       </button>
//     </>
//   );
// };

// // ==========================================
// // GET VALUES
// // ==========================================

// const GetValuesForm = () => {
//   const {
//     register,
//     getValues,
//   } = useForm();

//   const handleGet = () => {
//     console.log(getValues());
//   };

//   return (
//     <>
//       <input {...register("name")} />

//       <button onClick={handleGet}>
//         Get Values
//       </button>
//     </>
//   );
// };

// // ==========================================
// // FORM STATES
// // ==========================================

// const FormStates = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: {
//       errors,
//       isSubmitting,
//       isSubmitted,
//       isDirty,
//       isValid,
//     },
//   } = useForm({
//     mode: "onChange",
//   });

//   return (
//     <form>
//       <input {...register("name")} />

//       <button disabled={isSubmitting}>
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // MODES
// // ==========================================

// useForm({
//   mode: "onSubmit",
// });

// useForm({
//   mode: "onChange",
// });

// useForm({
//   mode: "onBlur",
// });

// useForm({
//   mode: "all",
// });

// // ==========================================
// // ZOD + REACT HOOK FORM
// // ==========================================

// import { zodResolver } from "@hookform/resolvers/zod";

// import { z } from "zod";

// const registerSchema = z.object({
//   name: z
//     .string()
//     .min(3, "Minimum 3 characters"),

//   email: z
//     .string()
//     .email("Invalid email"),

//   password: z
//     .string()
//     .min(8, "Password too short"),
// });

// type RegisterFormData = z.infer<
//   typeof registerSchema
// >;

// const RegisterForm = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm<RegisterFormData>({
//     resolver:
//       zodResolver(registerSchema),
//   });

//   const onSubmit = (
//     data: RegisterFormData
//   ) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("name")}
//         placeholder="Name"
//       />

//       {errors.name && (
//         <p>{errors.name.message}</p>
//       )}

//       <input
//         {...register("email")}
//         placeholder="Email"
//       />

//       {errors.email && (
//         <p>{errors.email.message}</p>
//       )}

//       <input
//         type="password"
//         {...register("password")}
//         placeholder="Password"
//       />

//       {errors.password && (
//         <p>{errors.password.message}</p>
//       )}

//       <button type="submit">
//         Register
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // FIELD ARRAY
// // ==========================================

// import { useFieldArray } from "react-hook-form";

// const FieldArrayForm = () => {
//   const {
//     control,
//     register,
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       skills: [
//         {
//           name: "",
//         },
//       ],
//     },
//   });

//   const {
//     fields,
//     append,
//     remove,
//   } = useFieldArray({
//     control,
//     name: "skills",
//   });

//   return (
//     <form>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <input
//             {...register(
//               `skills.${index}.name`
//             )}
//           />

//           <button
//             type="button"
//             onClick={() =>
//               remove(index)
//             }
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={() =>
//           append({ name: "" })
//         }
//       >
//         Add Skill
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // CONTROLLER (MUI / CUSTOM INPUTS)
// // ==========================================

// import { Controller } from "react-hook-form";

// const ControllerForm = () => {
//   const {
//     control,
//     handleSubmit,
//   } = useForm();

//   return (
//     <form>
//       <Controller
//         name="email"
//         control={control}
//         render={({ field }) => (
//           <input
//             {...field}
//             placeholder="Email"
//           />
//         )}
//       />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // MUI + REACT HOOK FORM
// // ==========================================

// import TextField from "@mui/material/TextField";

// const MuiForm = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   return (
//     <form>
//       <TextField
//         label="Email"
//         fullWidth
//         margin="normal"
//         {...register("email", {
//           required: "Email required",
//         })}
//         error={!!errors.email}
//         helperText={
//           errors.email?.message as string
//         }
//       />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // API SUBMIT WITH AXIOS
// // ==========================================

// import axios from "axios";

// const ApiForm = () => {
//   const {
//     register,
//     handleSubmit,
//   } = useForm();

//   const onSubmit = async (
//     data: any
//   ) => {
//     try {
//       const response =
//         await axios.post(
//           "http://localhost:5000/api/users",
//           data
//         );

//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name")} />

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // REACT QUERY + REACT HOOK FORM
// // ==========================================

// import {
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";

// const ReactQueryForm = () => {
//   const queryClient = useQueryClient();

//   const {
//     register,
//     handleSubmit,
//     reset,
//   } = useForm();

//   const mutation = useMutation({
//     mutationFn: async (data: any) => {
//       const response =
//         await axios.post(
//           "http://localhost:5000/api/users",
//           data
//         );

//       return response.data;
//     },

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });

//       reset();
//     },
//   });

//   const onSubmit = (data: any) => {
//     mutation.mutate(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name")} />

//       <button
//         type="submit"
//         disabled={mutation.isPending}
//       >
//         {mutation.isPending
//           ? "Loading..."
//           : "Submit"}
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // REAL-WORLD LOGIN FORM
// // ==========================================

// const loginSchema = z.object({
//   email: z
//     .string()
//     .email("Invalid email"),

//   password: z
//     .string()
//     .min(8),
// });

// type LoginFormData = z.infer<
//   typeof loginSchema
// >;

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: {
//       errors,
//       isSubmitting,
//     },
//   } = useForm<LoginFormData>({
//     resolver:
//       zodResolver(loginSchema),
//   });

//   const onSubmit = async (
//     data: LoginFormData
//   ) => {
//     try {
//       const response =
//         await axios.post(
//           "http://localhost:5000/api/auth/login",
//           data
//         );

//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("email")}
//         placeholder="Email"
//       />

//       {errors.email && (
//         <p>{errors.email.message}</p>
//       )}

//       <input
//         type="password"
//         {...register("password")}
//         placeholder="Password"
//       />

//       {errors.password && (
//         <p>{errors.password.message}</p>
//       )}

//       <button
//         type="submit"
//         disabled={isSubmitting}
//       >
//         {isSubmitting
//           ? "Loading..."
//           : "Login"}
//       </button>
//     </form>
//   );
// };

// // ==========================================
// // MOST IMPORTANT THINGS TO REMEMBER
// // ==========================================

// // useForm() -> create form
// // register() -> connect inputs
// // handleSubmit() -> handle submit
// // errors -> validation errors
// // reset() -> reset form
// // watch() -> watch field values
// // setValue() -> set field value
// // getValues() -> get form values
// // Controller -> MUI/custom inputs
// // useFieldArray() -> dynamic fields
// // zodResolver() -> zod validation