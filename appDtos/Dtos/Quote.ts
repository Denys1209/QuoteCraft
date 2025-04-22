import { z } from "zod";
import { modelDtoWithTimeStampSchema } from "../Shared/model-dto-with-timestamp";
import { getLightUserDtoSchema, getTextDtoSchema } from "./Text";
import { getLightCharacterDtoSchema } from "./Character";
import { getLightTagDtoSchema } from "./Tag";
import { modelDtoSchema } from "../Shared/model-dto";
export const QuoteConstants = {
  QuoteTextLength: 521,
  DescriptionLength: 521,
  ContextLength: 256
};

export const createQuoteDtoSchema = z.object({
  textId: z.string().uuid(),
  characterId: z.string().uuid(),
  creatorId: z.string().uuid(),
  tagIds: z.array(z.string().uuid()),
  quoteText: z.string().max(QuoteConstants.QuoteTextLength),
  context: z.string().max(QuoteConstants.ContextLength),
  description: z.string().max(QuoteConstants.DescriptionLength),
  isPublished: z.boolean()
});
export type CreateQuoteDto = z.infer<typeof createQuoteDtoSchema>;

export const getQuoteDtoSchema = modelDtoWithTimeStampSchema.extend({
  text: getTextDtoSchema,
  character: getLightCharacterDtoSchema,
  creator: getLightUserDtoSchema,
  tags: z.array(getLightTagDtoSchema),
  quoteText: z.string().max(QuoteConstants.QuoteTextLength),
  context: z.string().max(QuoteConstants.ContextLength),
  description: z.string().max(QuoteConstants.DescriptionLength),
  isPublished: z.boolean()
});
export type GetQuoteDto = z.infer<typeof getQuoteDtoSchema>;

export const updateQuoteDtoSchema = modelDtoSchema.extend({
  textId: z.string().uuid(),
  characterId: z.string().uuid(),
  creatorId: z.string().uuid(),
  tagIds: z.array(z.string().uuid()),
  quoteText: z.string().max(QuoteConstants.QuoteTextLength),
  context: z.string().max(QuoteConstants.ContextLength),
  description: z.string().max(QuoteConstants.DescriptionLength),
  isPublished: z.boolean()
});
export type UpdateQuoteDto = z.infer<typeof updateQuoteDtoSchema>;