import { FilterDto } from "@/appDtos/Shared/filter-dto";
import { ModelDto } from "@/appDtos/Shared/model-dto";
import { ReturnPageDto } from "@/appDtos/Shared/return-page-dto";
import { SortOrder } from "@/appDtos/Shared/sort-order";
import { CrudService } from "@/services/shared/CrudService";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { useCallback } from "react";
import { ZodError } from "zod";


export default function useGetPageOfItems<
  TGetModelDto extends ModelDto,
  TService extends CrudService<TGetModelDto, object, ModelDto>,
>(
  service: TService,
  perPage: string | undefined,
  page: string | undefined,
  sortDescriptor: SortDescriptor | undefined,
  setLoadingState: (value: LoadingState) => void,
  setError: (value: string | undefined) => void,
  setPerPageError: (value: any) => void,
  setItems: (value: ReturnPageDto<TGetModelDto> | undefined) => void,
  status: string,
  filtersDto?: FilterDto[][]
) {
  return useCallback(async () => {
    setLoadingState("loading");
    setError(undefined);
    setPerPageError(undefined);
    if (status !== "success") {
      setLoadingState(status as LoadingState);

      return;
    }
    try {
      setItems(undefined);
      setItems(
        await service.getAll({
          pageNumber: page ? parseInt(page) : 1,
          pageSize: perPage ? parseInt(perPage) || 10 : 10,
          filters: filtersDto ? filtersDto : [],
          sorts: sortDescriptor?.column
            ? [
                {
                  column: toPascalCase(sortDescriptor.column.toString()),
                  sortOrder:
                    sortDescriptor.direction === "ascending"
                      ? SortOrder.Asc
                      : SortOrder.Desc,
                },
              ]
            : [],
        })
      );
      setLoadingState("idle");
    } catch (e) {
      if (e instanceof ZodError) {
        setError(
          Object.entries(e.formErrors.fieldErrors)
            .map(([key, value]) => `\n${toTitleCase(key)}: ${value}`)
            .join(", ")
        );
        if (e.formErrors.fieldErrors.pageSize)
          setPerPageError(e.formErrors.fieldErrors.pageSize.toString());
      } else if (e instanceof Error) setError(e.message);
      else setError(`${e}`);
      setLoadingState("error");
    }
  }, [page, sortDescriptor, perPage, filtersDto]);
}
function toPascalCase(arg0: string): string {
  throw new Error("Function not implemented.");
}

function toTitleCase(key: string) {
  throw new Error("Function not implemented.");
}

