import { Avatar, Box, Center, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

import useGetUserRanking from 'hooks/useGetUserRanking'

const UserRanking = () => {
    const { getUserRanking, userList } = useGetUserRanking();
    useEffect(() => getUserRanking(), [getUserRanking])

    return (
        <>
            <Box alignItems='center' w='248px' minHeight='280px' my='5' >
                <Heading as='h3' pl='2' pt='2' mb='2' fontSize='16px'>ユーザーランキング</Heading>
                {userList?.map(user => (
                    <Box key={user.id}>
                        <Flex my='1'>
                            <Center w='32px' h='32px' mt='1'>
                                <Text>{user.id}</Text>
                            </Center>
                            <Avatar boxSize='32px' ml='1' mt='1' src={user.icon} />
                            <Flex>
                                <Text w='100px' my='auto' fontSize='sm' mx='2'>{user.displayName}</Text>
                            </Flex>
                            <Box w='84px' mt='1' lineHeight='1'>
                                <Center>
                                    <Text fontWeight='bold' fontSize='16px'>{user.contributionCount}</Text>
                                </Center>
                                <Text fontSize='1px' textAlign='center'>contributions</Text>
                            </Box>
                        </Flex>
                        <Divider borderColor='blackAlpha.500' orientation='horizontal' />
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default UserRanking
