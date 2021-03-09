import React from 'react'
import { Formik, Form } from 'formik'
import { InputField, MainButton, Wrapper } from '../components/atoms'
import { Box } from '@chakra-ui/react'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'

interface registerProps {

}

const REGISTER_MUT = `
mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password, milRank: "Captain") {
      errors {
        field,
        message
      },
      user {
        id,
        username,
        milRank
      }
    }
  }
`

const Register: React.FC<registerProps> = ({ }) => {
    const router = useRouter()
    const [, register] = useRegisterMutation()
    return (
        <Wrapper variant='small' >
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await register(values)
                    if (response.data?.register.errors) {
                        setErrors(toErrorMap(response.data.register.errors))
                    } else if (response.data?.register.user) {
                        // worked
                        router.push('/')
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name='username' placeholder='username' label='Username' />
                        <Box mt={4}>
                            <InputField name='password' placeholder='password' label='Password' type='password' />
                        </Box>
                        <MainButton mt={4} type='submit' colorScheme='blue' isLoading={isSubmitting} label='Submit' />
                    </Form>
                )}
            </Formik>
        </Wrapper>

    )
}

export default Register