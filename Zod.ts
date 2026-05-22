// // ==========================================
// // ZOD CHEAT SHEET
// // ==========================================

// // INSTALL
// // npm install zod

// // ==========================================
// // IMPORT
// // ==========================================

// import { z } from "zod";

// // ==========================================
// // BASIC SCHEMA
// // ==========================================

// const userSchema = z.object({
//   name: z.string(),
//   email: z.string(),
//   age: z.number(),
// });

// // ==========================================
// // VALIDATE DATA
// // ==========================================

// const result = userSchema.safeParse({
//   name: "Kurt",
//   email: "kurt@gmail.com",
//   age: 22,
// });

// if (!result.success) {
//   console.log(result.error.format());
// } else {
//   console.log(result.data);
// }

// // ==========================================
// // PARSE DATA
// // ==========================================

// // Throws error if invalid

// const data = userSchema.parse({
//   name: "Kurt",
//   email: "kurt@gmail.com",
//   age: 22,
// });

// // ==========================================
// // STRING VALIDATIONS
// // ==========================================

// const stringSchema = z.object({
//   username: z
//     .string()
//     .min(3, "Minimum 3 characters")
//     .max(20, "Maximum 20 characters")
//     .trim(),

//   password: z.string().min(8, "Password too short"),

//   email: z.string().email("Invalid email"),

//   website: z.string().url("Invalid URL"),

//   uuid: z.string().uuid(),

//   lowercase: z.string().toLowerCase(),

//   uppercase: z.string().toUpperCase(),
// });

// // ==========================================
// // NUMBER VALIDATIONS
// // ==========================================

// const numberSchema = z.object({
//   age: z.number().min(18).max(60),

//   price: z.number().positive(),

//   score: z.number().nonnegative(),

//   decimal: z.number().multipleOf(0.01),

//   integer: z.number().int(),
// });

// // ==========================================
// // BOOLEAN
// // ==========================================

// const booleanSchema = z.object({
//   isAdmin: z.boolean(),
// });

// // ==========================================
// // DATE
// // ==========================================

// const dateSchema = z.object({
//   createdAt: z.date(),
// });

// // ==========================================
// // ARRAY
// // ==========================================

// const arraySchema = z.object({
//   tags: z.array(z.string()),

//   numbers: z.array(z.number()),

//   users: z.array(
//     z.object({
//       name: z.string(),
//       email: z.string(),
//     }),
//   ),
// });

// // ==========================================
// // ENUM
// // ==========================================

// const roleSchema = z.object({
//   role: z.enum(["admin", "user", "moderator"]),
// });

// // ==========================================
// // OPTIONAL
// // ==========================================

// const optionalSchema = z.object({
//   name: z.string(),

//   bio: z.string().optional(),
// });

// // ==========================================
// // NULLABLE
// // ==========================================

// const nullableSchema = z.object({
//   image: z.string().nullable(),
// });

// // ==========================================
// // DEFAULT VALUES
// // ==========================================

// const defaultSchema = z.object({
//   role: z.string().default("user"),
// });

// // ==========================================
// // NESTED OBJECT
// // ==========================================

// const nestedSchema = z.object({
//   name: z.string(),

//   address: z.object({
//     city: z.string(),
//     country: z.string(),
//   }),
// });

// // ==========================================
// // CUSTOM VALIDATION
// // ==========================================

// const customSchema = z
//   .object({
//     password: z.string(),

//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// // ==========================================
// // REGEX
// // ==========================================

// const phoneSchema = z.object({
//   phone: z.string().regex(/^[0-9]+$/, "Only numbers allowed"),
// });

// // ==========================================
// // TRANSFORM
// // ==========================================

// const transformSchema = z.object({
//   name: z.string().transform((val) => val.toUpperCase()),
// });

// // ==========================================
// // COERCE
// // ==========================================

// // Converts string to number automatically

// const coerceSchema = z.object({
//   age: z.coerce.number(),
// });

// // ==========================================
// // PICK
// // ==========================================

// const fullUserSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   email: z.string(),
// });

// const pickedSchema = fullUserSchema.pick({
//   name: true,
//   email: true,
// });

// // ==========================================
// // OMIT
// // ==========================================

// const omittedSchema = fullUserSchema.omit({
//   id: true,
// });

// // ==========================================
// // EXTEND
// // ==========================================

// const baseUserSchema = z.object({
//   name: z.string(),
//   email: z.string(),
// });

// const adminSchema = baseUserSchema.extend({
//   role: z.string(),
// });

// // ==========================================
// // MERGE
// // ==========================================

// const profileSchema = z.object({
//   bio: z.string(),
// });

// const mergedSchema = baseUserSchema.merge(profileSchema);

// // ==========================================
// // PARTIAL
// // ==========================================

// // Makes all fields optional

// const updateUserSchema = baseUserSchema.partial();

// // ==========================================
// // TYPE INFERENCE
// // ==========================================

// const registerSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string(),
// });

// type RegisterType = z.infer<typeof registerSchema>;

// // ==========================================
// // EXPRESS.JS VALIDATION
// // ==========================================

// // middleware/validate.ts

// /*
// import { Request, Response, NextFunction } from "express";

// export const validate =
//   (schema: any) =>
//   (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     const result = schema.safeParse(
//       req.body
//     );

//     if (!result.success) {
//       return res.status(400).json({
//         errors:
//           result.error.flatten(),
//       });
//     }

//     req.body = result.data;

//     next();
//   };
// */

// // ==========================================
// // EXPRESS.JS USER SCHEMA
// // ==========================================

// export const createUserSchema = z.object({
//   name: z.string().min(3),

//   email: z.string().email(),

//   password: z.string().min(8),

//   age: z.number().min(18),
// });

// // ==========================================
// // EXPRESS ROUTE
// // ==========================================

// /*
// app.post(
//   "/api/users",
//   validate(createUserSchema),
//   async (req, res) => {
//     const user =
//       await User.create(req.body);

//     res.status(201).json(user);
//   }
// );
// */

// // ==========================================
// // LOGIN SCHEMA
// // ==========================================

// export const loginSchema = z.object({
//   email: z.string().email(),

//   password: z.string().min(8),
// });

// // ==========================================
// // UPDATE USER SCHEMA
// // ==========================================

// export const updateUserSchema = z.object({
//   name: z.string().min(3).optional(),

//   email: z.string().email().optional(),
// });

// // ==========================================
// // ENV VALIDATION
// // ==========================================

// const envSchema = z.object({
//   PORT: z.string(),

//   MONGO_URI: z.string(),

//   JWT_SECRET: z.string(),
// });

// const env = envSchema.parse(process.env);

// // ==========================================
// // SAFE PARSE REAL-WORLD
// // ==========================================

// const result2 = registerSchema.safeParse(req.body);

// if (!result2.success) {
//   return res.status(400).json({
//     message: "Validation Error",

//     errors: result2.error.flatten(),
//   });
// }

// const validatedData = result2.data;

// // ==========================================
// // COMMON ERROR FORMAT
// // ==========================================

// /*
// {
//   fieldErrors: {
//     email: ["Invalid email"],
//     password: ["Password too short"]
//   }
// }
// */

// // ==========================================
// // MOST IMPORTANT THINGS TO REMEMBER
// // ==========================================

// // z.object() -> object schema
// // z.string() -> string validation
// // z.number() -> number validation
// // z.array() -> array validation
// // z.enum() -> enum validation
// // safeParse() -> safe validation
// // parse() -> throws error
// // refine() -> custom validation
// // optional() -> optional field
// // infer -> TypeScript type
// // coerce -> auto convert type
