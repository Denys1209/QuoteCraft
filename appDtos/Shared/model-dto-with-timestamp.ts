import { z } from 'zod';
import { modelDtoSchema } from './model-dto';

export const modelDtoWithTimeStampSchema = modelDtoSchema.extend({
    createdAt: z.string().datetime(),
    updateAt: z.string().datetime()
});

export type ModelDtoWithTimeStamp = z.infer<typeof modelDtoWithTimeStampSchema>;