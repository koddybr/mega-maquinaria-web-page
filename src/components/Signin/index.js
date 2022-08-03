import React from 'react'
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
 } from './SigninElements'

const signIn = () => {
  return (
    <>
        <Container id='contact'>
            <FormWrap>
                
                <FormContent>
                    <Form action="#">
                        <FormH1>Para contactarnos llene el siguiente formulario</FormH1>
                        <FormLabel htmlForm='for'>Nombre y Apellidos</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlForm='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlForm='for'>Telefono</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlForm='for'>Pais/Ciudad</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlForm='for'>Mensaje</FormLabel>
                        <FormInput type='email' required />
                        <FormButton type='submit'>Enviar</FormButton>
                        <Text></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default signIn;