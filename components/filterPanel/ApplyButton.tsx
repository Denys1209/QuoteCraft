"use client"
import useSearchParam from '@/hooks/useSearchParam'
import { useSetSearchPropsLikeDict } from '@/hooks/useSetSearchParamsLikeDict'
import { Button } from '@heroui/button'
import React from 'react'

const ApplyButton = (
    {
        tagSlugs,
        characterSlug
    }:
    {
    tagSlugs: string[],
    characterSlug: string | undefined
    }
) => {
    const setFilters = useSetSearchPropsLikeDict();


  return (
    <Button className='w-full' color='primary' onPress={() => {
        const filtres:Record<string, string | undefined> = {
            "tags": tagSlugs.join(','),
            "character": characterSlug,
            "page": "1",
        }
        setFilters(filtres);
    }}>
        Search
    </Button>
  )
}

export default ApplyButton