import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                pos={'fixed'}
                zIndex={"overlay"}
                top={'4'}
                left={'4 '}
                colorScheme={'purple'}
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Video Store</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <NavLink to={'/'}>Home</NavLink>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <NavLink to={'/videos'}>Videos</NavLink>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <NavLink to={'/videos?category=free'}>Free videos</NavLink>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={'ghost'}
                                colorScheme={'purple'}
                            >
                                <NavLink to={'/upload'}>Upload Video</NavLink>
                            </Button>
                        </VStack>

                        <HStack
                            pos={'absolute'}
                            bottom={'10'}
                            left={'0'}
                            w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <NavLink to={'/login'}>Log In</NavLink>
                            </Button>

                            <Button
                                onClick={onClose}
                                colorScheme={'purple'}
                                variant={'outline'}
                            >
                                <NavLink to={'/signup'}>Sign Up</NavLink>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Header;
