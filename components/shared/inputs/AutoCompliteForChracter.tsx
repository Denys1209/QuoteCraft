import { GetCharacterDto } from '@/appDtos/Dtos/Character';
import { FilterDto } from '@/appDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/appDtos/Shared/return-page-dto';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import { CharacterService } from '@/services/crudServices/CrudCharacterService';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { LoadingState, SortDescriptor } from '@react-types/shared';
import React, { useEffect, useState } from 'react'

const AutoCompliteForChracter = ({
    onChange,
    currentValue
}:{
     onChange: (characterSlug:string|undefined) => void,
  currentValue: string|undefined
}) => {
   let service = new CharacterService();

  const [items, setItems] = useState<ReturnPageDto<GetCharacterDto>>();
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [error, setError] = useState<string>();
  const [perPageError, setPerPageError] = useState<string>();
  const [filters, setFilters] = useState<FilterDto[][]>(
[
     
    ]
  );

  const loadCharacters = useGetPageOfItems<GetCharacterDto, CharacterService>(
    service,
    "40",
    "1",
    sortDescriptor,
    setLoadingState,
    setError,
    setPerPageError,
    setItems,
    "success",
    filters

  );

  useEffect(() => {

    loadCharacters().then()

    
  }, [loadCharacters]);

   
  

  return (
    <Autocomplete
      className="max-w-xs"
      isLoading={loadingState != "idle"}
      defaultItems={items?.models ?? []}
      defaultSelectedKey={currentValue as any}
      label="Pick a Chracter"
      placeholder="Select a Character"
      variant="flat"
                onSelectionChange={(e) => {
                 onChange(e as string | undefined);
                }}
    >
      {(item) => (
        <AutocompleteItem key={item.slug} className="capitalize">
          {item.name}
        </AutocompleteItem>
      )}
    </Autocomplete> 
  );
}

export default AutoCompliteForChracter