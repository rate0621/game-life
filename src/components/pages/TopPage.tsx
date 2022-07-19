import { Box, Spacer, HStack } from '@chakra-ui/react'

import Header from 'components/organisms/layouts/Header';
import TagRanking from 'components/organisms/sideBar/TagRanking';
import UserRanking from 'components/organisms/sideBar/UserRanking';
import TopMainContents from 'components/organisms/sideBar/TopMainContents';


const TopPage = () => {
    return (
        <>
            <Header />
            <HStack m='15px' alignItems='top' justify='center' spacing='100px'>
                <Box>
                    <TagRanking />
                    <UserRanking />
                </Box>
                <Box  w='760px'>
                    <TopMainContents />
                </Box>
            </HStack>
        </>
    )
}

export default TopPage