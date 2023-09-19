import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react';
import {NavLink} from 'react-router-dom'
import React from 'react'

function Signup() {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack
                alignItems={'stretch'}
                spacing={'8'}
                w={["full","96"]}
                m={'auto'}
                my={'16'}
            >
                <Heading>VIDEO STORE</Heading>
                <Avatar alignSelf={'center'} boxSize={"24"}/>

                <Input
                    placeholder={'Name'}
                    type={'text'}
                    required
                    focusBorderColor={'purple.500'}
                />
                
                <Input
                    placeholder={'Email'}
                    type={'email'}
                    required
                    focusBorderColor={'purple.500'}
                />

                <Input
                    placeholder={'Password'}
                    type={'password'}
                    required
                    focusBorderColor={'purple.500'}
                />

                <Button colorScheme={"purple"} type={"submit"}> 
                Sign Up
                </Button>

                <Text textAlign={"right"} >
                    Already Signed Up? {' '}
                    <Button variant={"link"} colorScheme={"purple"}>  
                    <NavLink to={"/login"}>Log In</NavLink>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
    );
}

export default Signup