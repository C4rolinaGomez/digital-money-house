import { z } from "zod";

const RegisterSchema = z.object({
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  dni: z.number(),
  password: z.string(),
  phone: z.string(),
});
export default RegisterSchema;
