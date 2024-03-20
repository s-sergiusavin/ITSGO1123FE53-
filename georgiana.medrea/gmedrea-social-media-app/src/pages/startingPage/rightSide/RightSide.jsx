import RightSideElement from './RightSideElement';
import styles from './RightSide.module.scss';


const RightSide = () => {

    const FriendsElements = [
        {
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbzMHWQ8YbGA-N1AGdbdFBXPr_qQ5O-wgXfbf62e2_vahCu-z0',
            name: 'Username 1',
            id: 0
        },
        {
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc-0OOz-YcwXqETP0Ejssv1g_xWUFbq_kv4-4wDcsBGmJ8D8ez',
            name: 'Username 2',
            id: 1
        },
        {
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWURShFTiTxUYBFzZDhkrNvoHvTfvek86GG3vMoRIXvrfSv5Vn',
            name: 'Username 3',
            id: 2
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKBJL-iCloJc7R4mgkJI0bECtvCDZ1nxkgLFc0-O7COSKUqsJ',
            name: 'Username 4',
            id: 3
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwSEAdEG_UMhONxxcGk1siakq2Pp4sHMwGDVYCBIC-EuBjppV',
            name: 'Username 5',
            id: 4
        },
        {
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUiLItFSy8oi_nqQ8zCndjuOpL6uEn0vX0qzITFgiBfAzMtfSo',
            name: 'Username 6',
            id: 5
        },
        {
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzdJL8Zxp_Sy_f9c4TeJjLoacWlKjWWfHL_r6EcpNc92Tuw9p8',
            name: 'Username 7',
            id: 6
        },
        {
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBpu3igHBQOOkY4UVZ0lexb2CuVKncYwV0Xd8P0lKLD48hqZ2Q',
            name: 'Username 8',
            id: 7
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1d1oDPh6gnzx1rtcjjJAqoc_TbiWEzoCI7ZaJ4bHxeLIdA0da',
            name: 'Username 9',
            id: 8
        },
        {
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTh0DogaYKDVNyrk67_vYGDaTsNbeYtrai23yAhN7yovySjcZse',
            name: 'Username 10',
            id: 9
        },
        {
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZqOzzYvEhW2GDBq9fQUqDi0Ca2ezAJ_S7nX2oGPwRpTrJLp0n',
            name: 'Username 11',
            id: 10
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWLpEOZwxIQJc6NJ67ThZximHqId7cPlugfZrvKhFLNkt-l3r',
            name: 'Username 12',
            id: 11
        }
    ]

    return (
        <div className={styles.rightContainer}>
            {FriendsElements.map( (friendElement) => {
                return (
                    <RightSideElement 
                    imageUrl={friendElement.imageUrl}
                    name={friendElement.name}
                    key={friendElement.id} />
                )
            })}
        </div>
    )
}

export default RightSide;