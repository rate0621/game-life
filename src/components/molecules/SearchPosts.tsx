import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

const SearchPosts = () => {
    return (
        <InputGroup mr={2}>
            <InputLeftElement children={<SearchIcon />} />
            <Input
                width='300px'
                placeholder='キーワードを入力'
                _placeholder={{ color: 'inherit' }}
            />
        </InputGroup>
    )
}

export default SearchPosts
