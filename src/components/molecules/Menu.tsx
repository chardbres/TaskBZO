import React from 'react'
import { Drawer } from '@chakra-ui/react'

const Menu = () => {
    return (
        <Drawer isOpen={true} >
            <DrawerOverly>
                <DrawerContent>
                    <DrawerHeader>Drawer on left!</DrawerHeader>
                    <DrawerBody>
                        <div>Div 1</div>
                        <div>Div 2</div>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverly>
        </Drawer>
    )
}