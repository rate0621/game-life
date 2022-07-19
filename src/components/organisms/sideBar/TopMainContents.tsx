import { Avatar, Box,  Flex, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { AiFillTag, AiOutlineLike } from 'react-icons/ai'

import useGetTopMainContents from 'hooks/useGetTopMaincontents'

const TopMainContents = () => {
    const { getTopMainContents, topMainContentsList } = useGetTopMainContents();
    useEffect(() => getTopMainContents(), [getTopMainContents])

    return (
        <>
            {topMainContentsList?.map(MainContents => (
            <Box minHeight='170px' bg='white' mb='14px' key={MainContents.id} >
                <HStack alignItems='top' pl='12px' pt='12px'>
                    <Box>
                        <Avatar boxSize='32px' src={MainContents.icon} />
                    </Box>
                    <Box>
                        <Box>
                            <Text>{MainContents.displayName}</Text>
                            <Text fontSize='xs'>{MainContents.created_at}</Text>
                        </Box>
                        <Box mt='10px' mb='10px'>
                            <Link fontSize='xl' fontWeight='bold'>{MainContents.postTitle}</Link>
                        </Box>
                        <Flex alignItems='center'>
                            <Icon mr='7px' as={AiFillTag} />
                            <Text fontSize='xs'>{MainContents.tags}</Text>
                        </Flex>
                        <Flex alignItems='center'>
                            <Icon  mr='7px' as={AiOutlineLike} />
                            <Text fontSize='s'>{MainContents.contributionCount}</Text>
                        </Flex>
                    </Box>
                </HStack>
            </Box>
            ))}
        </>
    )
}

export default TopMainContents