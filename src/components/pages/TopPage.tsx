import { Flex, Heading } from '@chakra-ui/react'

import SearchPosts from 'components/molecules/SearchPosts';
import Notification from 'components/atoms/notifications/notification';
import UserAvatar from 'components/atoms/avatars/UserAvatar';

const TopPage = () => {
    return (
        <Flex
            as="nav"
            bg="teal.300"
            color="gray.50"
            align="center"
            justify="space-between"
            padding={{ base: 2, md: 4 }}
        >
            <Flex
                align="center"
                as="a"
                mr={20}
                _hover={{ cursor: "pointer" }}
            // onClick={onClickHome}
            >
                <Heading as="h1" fontSize={{ base: "md", md: "2xl" }}>
                    Game-Life
                </Heading>
            </Flex>
            <Flex>
                <SearchPosts />
                <Notification />
                <UserAvatar />
            </Flex>
        </Flex >
    )
}

export default TopPage
