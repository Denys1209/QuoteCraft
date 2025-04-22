import { z } from "zod";
import { modelDtoSchema } from "../Shared/model-dto";
import { getTextDtoSchema } from "./Text";

export const TagConstants = {
  NameLength: 128,
  SlugLength: 128,
  DescriptionLength: 128
};

export const getTagDtoSchema = modelDtoSchema.extend({
  text: getTextDtoSchema.nullable().optional(),
  name: z.string().max(TagConstants.NameLength),
  slug: z.string().max(TagConstants.SlugLength),
  description: z.string().max(TagConstants.DescriptionLength)
});
export type GetTagDto = z.infer<typeof getTagDtoSchema>;

export const createTagDtoSchema = z.object({
  textId: z.string().uuid().nullable().optional(),
  name: z.string().max(TagConstants.NameLength),
  slug: z.string().max(TagConstants.SlugLength),
  description: z.string().max(TagConstants.DescriptionLength)
});
export type CreateTagDto = z.infer<typeof createTagDtoSchema>;

export const getLightTagDtoSchema = modelDtoSchema.extend({
  name: z.string().max(TagConstants.NameLength),
  slug: z.string().max(TagConstants.SlugLength),
  description: z.string().max(TagConstants.DescriptionLength)
});
export type GetLightTagDto = z.infer<typeof getLightTagDtoSchema>;

export const updateTagDtoSchema = modelDtoSchema.extend({
  textId: z.string().uuid().nullable().optional(), 
  name: z.string().max(TagConstants.NameLength),
  slug: z.string().max(TagConstants.SlugLength),
  description: z.string().max(TagConstants.DescriptionLength)
});
export type UpdateTagDto = z.infer<typeof updateTagDtoSchema>;