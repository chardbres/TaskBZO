import React from 'react'
import { Box, Icon, StylesProvider } from '@chakra-ui/react'
import { FaTasks } from 'react-icons/fa'
import { GiAcousticMegaphone } from 'react-icons/gi'
import { BiGroup } from 'react-icons/bi'
import styles from '../../../styles/MenuButton.module.css'

type MenuButtonProps = {
    icon: string
    title: string
}


export const MenuButton: React.FC<MenuButtonProps> = (props) => {
    const ChooseIcon = (selection: string) => {
        switch (selection) {
            case 'tasks':
                return <Icon as={FaTasks} />
                break
            case 'squad':
                return <Icon as={BiGroup} />
                break
            case 'gripes':
                return <Icon as={GiAcousticMegaphone} />
                break
        }
    }

    return (
        <Box
            as='button'
            alignItems='center'
            display='flex'
            flexDirection='row'
            fontSize='1.5rem'
            margin='.5rem 0'
            paddingLeft='1.5em'
            textAlign='left'
            w='100%'
        >
            {ChooseIcon(props.icon)}
            <p className={styles.tag} >{props.title}</p>
        </Box>
    )
}