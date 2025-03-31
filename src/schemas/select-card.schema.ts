import { z } from "zod";

const SelectCardSchema = z.object({
  amount: z.string().pipe(z.coerce.number().positive()),
});
