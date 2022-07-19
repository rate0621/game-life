import { Box, Center, Divider, Flex, Heading, VStack, Image, Link, Text, HStack, StackDivider, Button, ButtonGroup, UnorderedList, ListItem } from '@chakra-ui/react'
import { useEffect } from 'react'

import useGetTagRanking from 'hooks/useGetTagRanking'
import { ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons';

const TagDescription = () => {
    const { getTagRanking, tagList } = useGetTagRanking();
    useEffect(() => getTagRanking(), [getTagRanking])

    return (
        <>
            <Box ml="30px" mt="25px">
                <Heading as='h2' size='sm'>
                    <InfoIcon w={6} h={6} mr="6px" color='gray.400' />
                    Info
                </Heading>
                <Text mt="20px" fontSize="md">
                    プリンセスコネクトはCygameが贈る、とってもプリンセスがコネクトなリダイブです。
                    さあ、あなたもレッツウマぴょい。
                </Text>
                <UnorderedList mt="30px" mb="25px">
                    <ListItem>公式サイト： <Link color="teal.500" href='https://priconne-redive.jp/' isExternal>プリンセスコネクト！Re:dive公式サイト<ExternalLinkIcon mx="2px" /></Link></ListItem>
                    <ListItem>Wikipedia： <Link color="teal.500" href='https://priconne-redive.jp/' isExternal>Wikipedia<ExternalLinkIcon mx="2px" /></Link></ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}

export default TagDescription
