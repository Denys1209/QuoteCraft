import { z } from "zod";
import { modelDtoSchema } from "../Shared/model-dto";


export const AuthorConstants = {
  NameLength: 256
};

export const createAuthorDtoSchema = z.object({
  name: z.string().max(AuthorConstants.NameLength)
});
export type CreateAuthorDto = z.infer<typeof createAuthorDtoSchema>;

export const getAuthorDtoSchema = modelDtoSchema.extend({
  name: z.string().max(AuthorConstants.NameLength)
});
export type GetAuthorDto = z.infer<typeof getAuthorDtoSchema>;

export const updateAuthorDtoSchema = modelDtoSchema.extend({
  name: z.string().max(AuthorConstants.NameLength)
});
export type UpdateAuthorDto = z.infer<typeof updateAuthorDtoSchema>;