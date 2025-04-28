"use client"
import React, { useState } from 'react'
import WhoSaidPanel from './WhoSaidPanel';
import TagPanel from './TagPanel';
import ApplyButton from './ApplyButton';
import CleanButton from './CleanButton';

const FilterPanel = ({
characterSlugOutside,
tagSlugsOutside
}:{
    
tagSlugsOutside:string[]
characterSlugOutside:string|undefined
}) => {
    const [characterSlug, setCharacterSlug] = useState<string | undefined>(characterSlugOutside);
    const [tagSlugs, setTagSlugs] = useState<string[]>(tagSlugsOutside)

    return (
        <div className='flex-col w-full items-center'>
            <WhoSaidPanel characterSlug={characterSlug} setCharcterSlug={setCharacterSlug}
            />
            <div className='mt-2'>
                <TagPanel tagSlugs={tagSlugs} setTagSlugs={setTagSlugs}
                />
            </div>
            <div className='mt-2'>
                <ApplyButton tagSlugs={tagSlugs} characterSlug={characterSlug}/>
            </div>
            <div className='mt-2'>
                <CleanButton />
            </div>
        </div>
    )
}

export default FilterPanel