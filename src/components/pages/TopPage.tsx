import { Box, Container, Flex, Heading, Spacer, Center, Text, Image } from '@chakra-ui/react'

import Header from 'components/organisms/layouts/Header';
import useGetTagRanking from 'hooks/useGetTagRanking'
import { useEffect } from 'react';


const TopPage = () => {
    const { getTagRanking, tagList } = useGetTagRanking();
    useEffect(() => getTagRanking(), [getTagRanking])

    return (
        <>
            <Header />
            <Container maxW='5xl'>
                <Flex>
                    <Box>
                        <Box w='248px' minHeight='280px' my='5' borderRadius="md" shadow="md">
                            <Heading as='h3' pl='2' pt='2' mb='2' fontSize='16px'>タグランキング</Heading>
                            {tagList?.map(tag => (
                                <Flex key={tag.id}>
                                    <Center w='32px' h='32px' ml='1' mt='1'>
                                        <Text>{tag.id}</Text>
                                    </Center>
                                    <Image boxSize='32px' ml='1' mt='1' src={tag.icon} />
                                    <Center fontSize='sm' mx='2'>{tag.name}</Center>
                                    <Box mt='1' lineHeight='1'>
                                        <Center>
                                            <Text fontSize='16px'>{tag.postCount}</Text>
                                        </Center>
                                        <Text fontSize='1px'>posts</Text>
                                    </Box>
                                </Flex>
                            ))}
                        </Box>
                        {/* <Box bg="white" w='220px'>
                            <Heading as='h3' fontSize='lg'>ユーザーランキング</Heading>
                            <Box p={4} borderRadius="md" shadow="md"></Box>
                        </Box> */}
                    </Box>
                    <Spacer />
                    <Box w='70px' h='10' bg='blue.500' />
                    <Spacer />
                    <Box w='70px' h='10' bg='yellow.500' />
                </Flex>
            </Container>
        </>
    )
}

export default TopPage
