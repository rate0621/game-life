import { Box, Spacer, HStack, VStack } from '@chakra-ui/react'

import Header from 'components/organisms/layouts/Header';
import TagDescription from 'components/organisms/TagDescription';
import TagInfo from 'components/organisms/sideBar/TagInfo';
import UserRanking from 'components/organisms/sideBar/UserRanking';
import TopMainContents from 'components/organisms/sideBar/TopMainContents';
import PopularPostsIntag from 'components/organisms/sideBar/PopularPostsIntag';


const TagDetailPage = () => {
    return (
        <>
            <Header />
            <HStack m='15px' alignItems='top'>
                <VStack>
                <Box w='340px' h='300px' bg='white'>
                    <TagInfo />
                </Box>
                <Box w='340px' pl='30px' bg='white'>
                    <UserRanking />
                </Box>
                </VStack>
                <Spacer />
                <VStack>
                    <Box w='760px' bg='white' mb='30px'>
                        <TagDescription />
                    </Box>
                    <Box  w='760px'>
                        <PopularPostsIntag />
                    </Box>
                </VStack>
            </HStack>
        </>
    )
}

export default TagDetailPage