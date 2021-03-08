import React from 'react'
import { Formik, Form } from 'formik'
import { InputField, MainButton, Wrapper } from '../components/atoms'
import { Box } from '@chakra-ui/react'

interface registerProps {

}

const Register: React.FC<registerProps> = ({ }) => {
    return (
        <Wrapper variant='small' >
            <Formik initialValues={{ username: '', password: '' }} onSubmit={values => console.log(values)}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name='username' placeholder='username' label='Username' />
                        <Box mt={4}>
                            <InputField name='password' placeholder='password' label='Password' type='password' />
                        </Box>
                        <MainButton mt={4} type='submit' colorScheme='taskBZO' title='Submit' />
                    </Form>
                )}
            </Formik>
        </Wrapper>

    )
}

export default Register