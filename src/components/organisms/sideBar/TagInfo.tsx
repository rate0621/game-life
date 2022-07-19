import { Box, Center, Divider, Flex, Heading, VStack, Image, Text, HStack, StackDivider, Button, ButtonGroup } from '@chakra-ui/react'
import { useEffect } from 'react'

import useGetTagDetail from 'hooks/useGetTagDetail'
import { Link, useLocation } from 'react-router-dom';

const TagInfo = () => {
    const location = useLocation();
    const slug = location.pathname.split('/')[2]
    const { getTagDetail, tagDetail } = useGetTagDetail(slug);
    useEffect(() => getTagDetail(), [getTagDetail])

    return (
        <>
        <VStack spacing={6}>
            <Image boxSize='64px' ml='1' mt='4' src={`${window.location.origin}/` + tagDetail?.icon}/>
            <Text align='center' w='300px' my='auto' fontSize='m' mx='2'>{tagDetail?.name}</Text>
            <HStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={2}
            >
                <Box alignItems='center'>
                    <Text align="center" w='100px' my='auto' fontSize='m' mx='2'>{tagDetail?.postCount}</Text>
                    <Text align="center" w='100px' my='auto' fontSize='m' mx='2'>記事</Text>
                </Box>
                <Box alignItems='center'>
                    <Text align="center" w='100px' my='auto' fontSize='m' mx='2'>{tagDetail?.followerCount}</Text>
                    <Text align="center" w='100px' my='auto' fontSize='m' mx='2'>フォロワー</Text>
                </Box>
            </HStack>
            <ButtonGroup variant='outline' spacing='6'>
                <Button colorScheme='blue'>このタグをフォロー</Button>
            </ButtonGroup>
        </VStack>
        </>
    )
}

export default TagInfo
