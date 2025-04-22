import { CreateCharacterDto, createCharacterDtoSchema, GetCharacterDto, getCharacterDtoSchema, UpdateCharacterDto, updateCharacterDtoSchema } from "@/appDtos/Dtos/Character";
import { CrudService } from "../shared/CrudService";

export class CharacterService extends CrudService<
  GetCharacterDto,
  CreateCharacterDto,
  UpdateCharacterDto
> {
  public constructor() {
    super(
      getCharacterDtoSchema,
      createCharacterDtoSchema,
      updateCharacterDtoSchema,
      "Character"
    );
  }
}

