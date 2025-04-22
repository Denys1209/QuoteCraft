import { z } from "zod";
import { modelDtoSchema } from "../Shared/model-dto";
import { getTextDtoSchema } from "./Text";

export const CharacterConstants = {
  NameLength: 128,
  SlugLength: 128,
};

export const createCharacterDtoSchema = z.object({
  name: z.string().max(CharacterConstants.NameLength),
  slug: z.string().max(CharacterConstants.SlugLength),
  textId: z.string().uuid(),
});
export type CreateCharacterDto = z.infer<typeof createCharacterDtoSchema>;

export const getLightCharacterDtoSchema = modelDtoSchema.extend({
  name: z.string().max(CharacterConstants.NameLength),
  slug: z.string().max(CharacterConstants.SlugLength),
});
export type GetLightCharacterDto = z.infer<typeof getLightCharacterDtoSchema>;

export const updateCharacterDtoSchema = modelDtoSchema.extend({
  name: z.string().max(CharacterConstants.NameLength),
  slug: z.string().max(CharacterConstants.SlugLength),
  textId: z.string().uuid(),
});
export type UpdateCharacterDto = z.infer<typeof updateCharacterDtoSchema>;

export const getCharacterDtoSchema = modelDtoSchema.extend({
  text: getTextDtoSchema,
  name: z.string().max(CharacterConstants.NameLength),
  slug: z.string().max(CharacterConstants.SlugLength)
});
export type GetCharacterDto = z.infer<typeof getCharacterDtoSchema>;