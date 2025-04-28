
import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'
import AutoCompliteForChracter from '../shared/inputs/AutoCompliteForChracter'

const WhoSaidPanel = (
    {
        characterSlug,
        setCharcterSlug
    }
        :
        {

            characterSlug: string | undefined,
            setCharcterSlug: (s: string | undefined) => void
        }) => {

    return (
        <Accordion>
            <AccordionItem key="1" aria-label="who said" title="Who said" className='filterPanel'>
                <AutoCompliteForChracter onChange={setCharcterSlug} currentValue={characterSlug} />
            </AccordionItem>
        </Accordion>
    )
}

export default WhoSaidPanel