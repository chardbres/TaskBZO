import React from 'react'
import {
    Box,
    Icon
} from '@chakra-ui/react'
import { MenuButton } from '../atoms'
import { FaParachuteBox } from 'react-icons/fa'
import styles from '../../styles/Menu.module.css'

type MenuProps = {
    title: string
}


export const Menu: React.FC<MenuProps> = (props) => {
    const onClose = () => null

    return (
        <Box borderRight='1px solid white' height='100vh' position='absolute' w='20vw'>
            <Box
                alignItems='center'
                borderBottom='1px solid white'
                display='flex'
                flexDirection='row'
                fontSize='2rem'
                h='10vh'
                margin='auto'
                w='90%'
            >
                <Icon as={FaParachuteBox} ml='1rem' mr='1rem' />
                {props.title}
            </Box>
            <Box
                display='flex'
                flexDirection='column'
            >
                <MenuButton icon='squad' title='My Squad' />
                <MenuButton icon='tasks' title='My Tasks' />
                <MenuButton icon='gripes' title='My Gripes' />
            </Box>
        </Box>
    )
}