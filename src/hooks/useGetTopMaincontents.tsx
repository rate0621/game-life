import { useState } from 'react'
import { TopMainContents } from 'types/api/TopMainContents';

const tmpTopMaincontents = [
    {
        id: 1,
        displayName: 'キャベツ太郎',
        userId: 'kyabetu',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 200
    },
    {
        id: 2,
        displayName: 'にんじん太郎',
        userId: 'ninjin',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 200
    },
    {
        id: 3,
        displayName: 'レタス太郎',
        userId: 'retasu',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 200
    },
    {
        id: 4,
        displayName: 'ピーマン太郎',
        userId: 'Pman',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 270
    },
    {
        id: 5,
        displayName: 'ナス太郎',
        userId: 'nasu',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 300
    },
    {
        id: 6,
        displayName: 'ハム太郎',
        userId: 'hamu',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 1000
    },
    {
        id: 7,
        displayName: '牛太郎',
        userId: 'usi',
        postTitle: '所詮この世はウマぴょいだ',
        icon: '',
        tags: 'プリコネR',
        created_at: '2022年01月01日',
        contributionCount: 20
    },
]

const useGetTopMainContents = () => {
    const [topMainContentsList, setTopMainContentsList] = useState<Array<TopMainContents>>();

    const getTopMainContents = () => {
        setTopMainContentsList(tmpTopMaincontents);
    }

    return {
        getTopMainContents,
        topMainContentsList
    }
}

export default useGetTopMainContents
