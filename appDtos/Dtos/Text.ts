import { z } from "zod";
import { modelDtoSchema } from "../Shared/model-dto";
import { getAuthorDtoSchema } from "./Author";

export const getTextDtoSchema: z.ZodType<any> = z.lazy(() => 
  modelDtoSchema.extend({
    author: getAuthorDtoSchema,
    name: z.string(),
    slug: z.string(),
    description: z.string()
  })
);
export type GetTextDto = z.infer<typeof getTextDtoSchema>;

export const getLightUserDtoSchema = z.lazy(() => 
  modelDtoSchema.extend({
    username: z.string(),
    email: z.string().email()
  })
);
export type GetLightUserDto = z.infer<typeof getLightUserDtoSchema>;