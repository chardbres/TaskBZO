import React from 'react'
import { Button } from '@chakra-ui/react'


type MainButtonProps = {
    colorScheme: string
    mt: number
    title: string
    type: 'button' | 'reset' | 'submit'
}

export const MainButton: React.FC<MainButtonProps> = (props) => {
    return (
        <Button colorScheme={props.colorScheme} mt={props.mt} type={props.type}>{props.title}</Button>
    )
}