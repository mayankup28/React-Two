import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/one.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingoption = {
    pos: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%,50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '3xl',
};

function Home() {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py={'2'}
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    margin={'auto'}
                >
                    Services
                </Heading>

                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'180%'}
                        p={["4", "16"]}
                        textAlign={'center'}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
                        quidem ullam mollitia ducimus ex nisi magnam ratione, cumque
                        nesciunt? Iure nesciunt nihil dolore repellendus tempore nostrum
                        incidunt veniam ab laboriosam! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vel velit fuga cumque facere
                        repellendus ea enim explicabo ipsa aliquam aspernatur neque ex
                        praesentium voluptas pariatur, ipsam reiciendis ipsum maxime
                        accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Repudiandae, eligendi cumque libero nihil, nisi officia, culpa quo
                        dolorum sint incidunt ipsa enim officiis voluptatibus perspiciatis
                        non! Quibusdam deserunt temporibus consectetur?
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

function MyCarousel() {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >
            <Box w="full" h={'100vh'}>
                <Image src={img1} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoption}>
                    Watch The Future
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img2} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
                    Future is gaming
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img3} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
                    Gaming On Console
                </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img4} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
                    Night life is cool
                </Heading>
            </Box>
        </Carousel>
    );
}

export default Home;
