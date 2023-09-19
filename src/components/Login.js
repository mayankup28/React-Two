import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react';
import {NavLink} from 'react-router-dom'
import React from 'react';

function Login() {
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
                    <Heading>Welcome Back</Heading>
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

                    <Button variant={"link"} alignSelf={"flex-end"}> 
                        <NavLink to={"/forgotpassword"}>Forgot Password</NavLink>
                    </Button>

                    <Button colorScheme={"purple"} type={"submit"}>Log In</Button>
                    <Text textAlign={"right"}>
                        New User? {' '}
                        <Button variant={"link"} colorScheme={"purple"}> 
                        <NavLink to={"/signup"}>Sign Up</NavLink>
                    </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    );
}

export default Login;
