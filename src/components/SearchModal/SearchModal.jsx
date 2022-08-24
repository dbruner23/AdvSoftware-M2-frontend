import React from 'react'
import { Modal, Button, Group } from '@mantine/core'
import { useEffect } from 'react'

const SearchModal = ({ modalOpened, setModalOpened, queryParams }) => {
    
  
return (
    <Modal
        // overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='75%'
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
    >
        <iframe allowtransparency="true" width="100%" height="500" src={`https://ui.customsearch.ai/hosted-page?customconfig=a7e5a762-9da8-4a20-a012-539b2cda9891&version=latest&market=en-US&q=${queryParams}`} frameborder="0" allowfullscreen></iframe>   
    </Modal>
  )
}

export default SearchModal

