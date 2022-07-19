import { Box, Center, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

import useGetTagRanking from 'hooks/useGetTagRanking'
import { Link } from 'react-router-dom';

const TagRanking = () => {
    const { getTagRanking, tagList } = useGetTagRanking();
    useEffect(() => getTagRanking(), [getTagRanking])

    return (
        <>
            <Box w='248px' minHeight='280px'>
                <Heading as='h3' pl='2' pt='2' mb='2' fontSize='16px'>タグランキング</Heading>
                {tagList?.map(tag => (
                    <Box key={tag.id}>
                        <Flex my='1'>
                            <Center w='32px' h='32px' mt='1'>
                                <Text>{tag.id}</Text>
                            </Center>
                            <Image boxSize='32px' ml='1' mt='1' src={tag.icon} />
                            <Flex>
                                <Link to={`tag/${tag.slug}`}>
                                    <Text w='100px' my='auto' fontSize='sm' mx='2'>{tag.name}</Text>
                                </Link>
                            </Flex>
                            <Box w='84px' mt='1' lineHeight='1'>
                                <Center>
                                    <Text fontWeight='bold' fontSize='16px'>{tag.postCount}</Text>
                                </Center>
                                <Text fontSize='1px' textAlign='center'>posts</Text>
                            </Box>
                        </Flex>
                        <Divider borderColor='blackAlpha.500' orientation='horizontal' />
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default TagRanking
