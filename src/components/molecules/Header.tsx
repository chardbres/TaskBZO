import React from 'react'
import { Box } from '@chakra-ui/react'
import styles from '../../styles/Header.module.css'

type HeaderProps = {
    title: string
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Box
            alignItems='center'
            borderBottom='1px solid white'
            color='white'
            display='flex'
            flexDirection='row'
            height='10vh'
            marginLeft='20vw'
            position='absolute'
            w='100%'
        >
            <h1 className={styles.headerTitle} >{props.title}</h1>
        </Box>
    )
}