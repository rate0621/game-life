import { useState } from 'react'
import { UserRanking } from 'types/api/UserRanking';

const tmpUserList = [
    {
        id: 1,
        displayName: 'キャベツ太郎',
        userId: 'kyabetu',
        icon: '',
        contributionCount: 200
    },
    {
        id: 2,
        displayName: 'にんじん太郎',
        userId: 'ninjin',
        icon: '',
        contributionCount: 200
    },
    {
        id: 3,
        displayName: 'レタス太郎',
        userId: 'retasu',
        icon: '',
        contributionCount: 200
    },
    {
        id: 4,
        displayName: 'ピーマン太郎',
        userId: 'Pman',
        icon: '',
        contributionCount: 270
    },
    {
        id: 5,
        displayName: 'ナス太郎',
        userId: 'nasu',
        icon: '',
        contributionCount: 300
    },
    {
        id: 6,
        displayName: 'ハム太郎',
        userId: 'hamu',
        icon: '',
        contributionCount: 1000
    },
    {
        id: 7,
        displayName: '牛太郎',
        userId: 'usi',
        icon: '',
        contributionCount: 20
    },
]

const useGetUserRanking = () => {
    const [userList, setUserList] = useState<Array<UserRanking>>();

    const getUserRanking = () => {
        setUserList(tmpUserList);
    }

    return {
        getUserRanking,
        userList
    }
}

export default useGetUserRanking
