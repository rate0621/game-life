import { useState } from 'react'
import { TagDetail } from 'types/api/TagDetail';

const tmpTagList = [
    {
        id: 1,
        name: 'プリンセスコネクト Re:Dive',
        slug: 'priconne',
        icon: 'icon_priconne-redive.png',
        postCount: 200,
        followerCount: 100
    },
    {
        id: 2,
        name: 'ウマ娘',
        slug: 'umamusume',
        icon: 'icon_priconne-redive.png',
        postCount: 300,
        followerCount: 200
    },
    {
        id: 3,
        name: 'プリンセスコネクト Re:Dive',
        slug: 'priconne3',
        icon: 'icon_priconne-redive.png',
        postCount: 20,
        followerCount: 300
    }
]

const useGetTagDetail = (slug: string) => {
    const [tagDetail, setTagList] = useState<TagDetail>();

    const getTagDetail = () => {
        setTagList(tmpTagList.find((v: any) => v.slug == slug));
    }

    console.log(tagDetail)

    return {
        getTagDetail,
        tagDetail
    }
}

export default useGetTagDetail
