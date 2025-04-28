"use client"
import { GetLightTagDto } from '@/appDtos/Dtos/Tag';
import { FilterDto } from '@/appDtos/Shared/filter-dto';
import { ReturnPageDto } from '@/appDtos/Shared/return-page-dto';
import useGetPageOfItems from '@/hooks/useGetPageOfItems';
import { TagService } from '@/services/crudServices/CrudTagService';
import { SharedSelection } from '@heroui/system';
import { Chip, Select, SelectedItems, SelectItem } from '@nextui-org/react';
import { LoadingState, SortDescriptor } from '@react-types/shared';
import { Tags } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const MultipleInputForTags = (
    {
        tagSlugs,
        setTagSlugs
    }
        :
        {

            tagSlugs: string[],
            setTagSlugs: (s: string[]) => void
        }
) => {

    let service = new TagService();

    const [items, setItems] = useState<ReturnPageDto<GetLightTagDto>>();
    const [loadingState, setLoadingState] = useState<LoadingState>("loading");
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
    const [error, setError] = useState<string>();
    const [perPageError, setPerPageError] = useState<string>();
    const [filters, setFilters] = useState<FilterDto[][]>(
        [

        ]
    );

    const handleSelect = (keys: SharedSelection) => {
        setTagSlugs([...(keys as any as string[])]);

        
    }


    const loadCharacters = useGetPageOfItems<GetLightTagDto, TagService>(
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
        <Select
            onSelectionChange={handleSelect}
            isMultiline={true}
            defaultSelectedKeys={tagSlugs}
            items={items?.models ?? []}
            isLoading={loadingState != "idle"}
            label="Select tags"
            placeholder="Select tags"
            renderValue={(items: SelectedItems<GetLightTagDto>) => {
                return (
                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <Chip key={item.key}
                                size="sm"
                                variant="flat"
                                color="secondary"
                                className="text-xs"
                            >{item.data?.name}</Chip>
                        ))}
                    </div>
                );
            }}
            selectionMode="multiple"
            variant="bordered"
        >
            {(tag) => (
                <SelectItem key={tag.slug} textValue={tag.name}>
                    {tag.name}
                </SelectItem>
            )}
        </Select>
    )
}

export default MultipleInputForTags