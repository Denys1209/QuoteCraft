import RelationService from "../shared/RelationService";

export class FavoriteQuoteRelationService extends RelationService {
  public constructor() {
    super("User", "Quote");
  }
}
