import { CreateTagDto, createTagDtoSchema, GetTagDto, getTagDtoSchema, UpdateTagDto, updateTagDtoSchema } from "@/appDtos/Dtos/Tag";
import { CrudService } from "../shared/CrudService";

export class TagService extends CrudService<
  GetTagDto,
  CreateTagDto,
  UpdateTagDto
> {
  public constructor() {
    super(
      getTagDtoSchema,
      createTagDtoSchema,
      updateTagDtoSchema,
      "Tag"
    );
  }
}
