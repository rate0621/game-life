import { useState } from 'react'
import { TagRanking } from 'types/api/TagRanking';

const tmpTagList = [
    {
        id: 1,
        name: 'プリンセスコネクト Re:Dive',
        icon: 'icon_priconne-redive.png',
        postCount: 200
    },
    {
        id: 2,
        name: 'プリンセスコネクト Re:Dive',
        icon: 'icon_priconne-redive.png',
        postCount: 300
    },
    {
        id: 3,
        name: 'プリンセスコネクト Re:Dive',
        icon: 'icon_priconne-redive.png',
        postCount: 20
    },
    {
        id: 4,
        name: 'プリンセスコネクト Re:Dive',
        icon: 'icon_priconne-redive.png',
        postCount: 50
    },
    {
        id: 5,
        name: 'プリンセスコネクト Re:Dive',
        icon: 'icon_priconne-redive.png',
        postCount: 89
    },
    {
        id: 6,
        name: 'プリンセスコネクト Re:Dive',
        icon: 'icon_priconne-redive.png',
        postCount: 2
    }
]

const useGetTagRanking = () => {
    const [tagList, setTagList] = useState<Array<TagRanking>>();

    const getTagRanking = () => {
        setTagList(tmpTagList);
    }

    return {
        getTagRanking,
        tagList
    }
}

export default useGetTagRanking
