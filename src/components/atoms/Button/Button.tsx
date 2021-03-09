import React from 'react'
import { Button } from '@chakra-ui/react'


type MainButtonProps = {
    colorScheme: string
    isLoading: boolean
    mt: number
    label: string
    type: 'button' | 'reset' | 'submit'
}

export const MainButton: React.FC<MainButtonProps> = (props) => {
    return (
        <Button colorScheme={props.colorScheme} isLoading={props.isLoading} mt={props.mt} type={props.type}>{props.label}</Button>
    )
}