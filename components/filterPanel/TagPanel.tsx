import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'
import AutoCompliteForChracter from '../shared/inputs/AutoCompliteForChracter'
import MultipleInputForTags from '../shared/inputs/MultipleInputForTags'

const TagPanel = (
    {
        tagSlugs,
        setTagSlugs
    }
        :
        {

            tagSlugs: string[],
            setTagSlugs: (s: string[]) => void
        }) => {

    return (
        <Accordion>
            <AccordionItem key="1" aria-label="tag" title="Tags" className='filterPanel'>
                <MultipleInputForTags tagSlugs={tagSlugs} setTagSlugs={setTagSlugs }
                />
            </AccordionItem>
        </Accordion>
    )
}

export default TagPanel