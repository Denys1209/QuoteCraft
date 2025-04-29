"use client"
import { useEffect, useState } from "react";
import useSearchParam from "@/hooks/useSearchParam";
import useDebounceState from "@/hooks/useDebounceState";
import { ReturnPageDto } from "@/appDtos/Shared/return-page-dto";
import { GetQuoteDto } from "@/appDtos/Dtos/Quote";
import { LoadingState, SortDescriptor } from "@react-types/shared";
import { FilterDto } from "@/appDtos/Shared/filter-dto";
import { QuoteService } from "@/services/crudServices/CrudQuoteService";
import useGetPageOfItems from "@/hooks/useGetPageOfItems";
import QuoteCard from "@/components/quotes/QuoteCard";
import MyPagination from "@/components/shared/MyPagination";
import FilterPanel from "@/components/filterPanel/FilterPanel";
import Loading from "./loading";
import { Quote } from "lucide-react";
import ButtonToOpenFilterPanelOnMobile from "@/components/filterPanel/ButtonToOpenFilterPanelOnMobile";


export default function Home() {


  const [page, setPage] = useSearchParam("page");

  const [tagSlugs, setTagSlugs] = useSearchParam("tags");

  const [characterSlug, setCharacterSlug] = useSearchParam("character");


  const [deletePage, setDeletePage] = useState(false);

  const [perPage, setPerPage] = useState("9");
  const [perPageState, setPerPageState] = useDebounceState(
    perPage,
    setPerPage,
    500
  );
  const [items, setItems] = useState<ReturnPageDto<GetQuoteDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [isFilterSet, setIsFilterSet] = useState(false);
  const [filters, setFilters] = useState<FilterDto[][]>();

  const service = new QuoteService();

  useEffect(() => {
    let newFilters: FilterDto[][] = [[]];
    if (characterSlug != undefined) {
      newFilters[0].push({
        column: "Character.Slug",
        searchTerm: characterSlug,
        filterType: "Strict",
        isStrict: true
      });
    }
    if (tagSlugs != undefined) {
      tagSlugs.split(',').forEach(e =>
        newFilters[0].push({
          column: "Tags.Slug",
          searchTerm: e,
          filterType: "Strict",
          isStrict: true
        }));
    }

    if (deletePage) {
      setPage(undefined);
      setDeletePage(false);
    }
    setFilters(newFilters);
    setIsFilterSet(true);
  }, [
    tagSlugs, characterSlug

  ]);

  const loadItems = useGetPageOfItems<GetQuoteDto, typeof service>(
    service,
    "4",
    page,
    sortDescriptor,
    setLoadingState,
    setError,
    setPerPage,
    setItems,
    "success",
    filters
  );

  useEffect(() => {
    if (isFilterSet) {
      loadItems().then();
    }
  }, [loadItems, filters]);

  if (loadingState != 'idle') {
    return <>
      <div className="container  py-6 ">
        <div className="flex-col md:flex md:flex-row-reverse justify-between w-full">
          <div className="flex w-full md:w-1/4 md:my-5 ">
            <FilterPanel characterSlugOutside={characterSlug} tagSlugsOutside={tagSlugs ? tagSlugs?.split(',') : []} />
          </div>
          <div className="flex-col justify-start items-start w-full md:w-8/12">
            <div className="mt-5">
              <Loading />
            </div>
          </div>

        </div>
      </div>
    </>
  }


  return (
    <div className="container  py-6 ">
      <div className="flex-col md:flex md:flex-row-reverse justify-between w-full">
        <div className="flex w-full md:w-1/4 md:my-5 ">
          <FilterPanel characterSlugOutside={characterSlug} tagSlugsOutside={tagSlugs ? tagSlugs?.split(',') : []} />
        </div>
        <div className="flex-col justify-start items-start w-full md:w-8/12">
          {
            items?.total != 0 ?
              items?.models.map((e, index) => (
                <div className="mt-5" key={index}>
                  <QuoteCard quote={e} />
                </div>
              )
              ) :
              <div
                className={`
        flex flex-col items-center justify-center
        text-center
        p-8 my-6 
        border border-dashed border-divider 
        rounded-lg 
        bg-background 
        text-foreground/60 
      `}
                role="status"
                aria-live="polite"
              >
                <Quote className="w-10 h-10 mb-4 text-foreground/40" strokeWidth={1.5} />

                <p className="text-lg font-medium font-sans">
                  No quotes found.
                </p>
              </div>
          }
        </div>

      </div>
      <div className="flex mt-5 justify-center items-center  w-full " >
        <MyPagination total={items!.howManyPages} page={page ? parseInt(page) : 1} onchange={(page: number) => setPage(page.toString())}
        />
      </div>
    </div>
  );
}
