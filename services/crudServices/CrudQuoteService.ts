import { CreateQuoteDto, createQuoteDtoSchema, GetQuoteDto, getQuoteDtoSchema, UpdateQuoteDto, updateQuoteDtoSchema } from "@/appDtos/Dtos/Quote";
import { CrudService } from "../shared/CrudService";

export class QuoteService extends CrudService<
  GetQuoteDto,
  CreateQuoteDto,
  UpdateQuoteDto
> {
  public constructor() {
    super(
      getQuoteDtoSchema,
      createQuoteDtoSchema,
      updateQuoteDtoSchema,
      "Quote"
    );
  }
}


