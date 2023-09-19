import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import { AiOutlineSend } from "react-icons/ai"

function Footer() {
    return (
        <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
            <Stack direction={["column", "row"]}>
                <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                        Subscribe to get daily updates
                    </Heading>
                    <HStack borderBottom={"2px solid white"} py={"2"}>
                        <Input placeholder='Enter Email Here' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none' />
                        <Button p={"0"} color={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                            <AiOutlineSend size={"20"} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={"full"} borderLeft={["none", "1px solid White"]} borderRight={["none", "1px solid White"]}>
                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        Video Store
                    </Heading>
                    <Text>All rights received</Text>
                </VStack>

                <VStack w={"full"}>
                    <Heading size={"md"} textTransform={"uppercase"}> 
                    Social Media
                    </Heading>
                    <Button variant={"link"} colorScheme={"purple"}>
                        <a target="blank" href="https://youtube.com">YouTube</a>
                    </Button>
                    <Button variant={"link"} colorScheme={"purple"}>
                        <a target="blank" href="https://instagram.com">Instagram</a>
                    </Button>
                    <Button variant={"link"} colorScheme={"purple"}>
                        <a target="blank" href="https://github.com">Github</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer