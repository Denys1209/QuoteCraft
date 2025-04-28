import { Button } from '@heroui/button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React from 'react'
import FilterPanel from './FilterPanel'

const ButtonToOpenFilterPanelOnMobile = ({
characterSlugOutside,
tagSlugsOutside
}:{
    
tagSlugsOutside:string[]
characterSlugOutside:string|undefined
}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
        <>
      <Button onPress={onOpen} color='secondary' className='w-full'>set tags</Button>
      <Modal
        isDismissable={true}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <FilterPanel tagSlugsOutside={tagSlugsOutside} characterSlugOutside={characterSlugOutside}/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ButtonToOpenFilterPanelOnMobile