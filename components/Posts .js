import React from 'react'

function Posts() {
    const posts = [
        {
            "id": 1,
            "avatar": "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png",
            "username": "saurabh",
            "timestamp": "4 hours ago",
            "content": "this is all about the natures",
            "postimage": "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
            "likes": "500k",
            "comments": "100k",
            "shares": "40k"
        },
        {
            "id": 1,
            "avatar": "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png",
            "username": "saurabh",
            "timestamp": "4 hours ago",
            "content": "this is all about the natures",
            "postimage": "https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
            "likes": "500k",
            "comments": "100k",
            "shares": "40k"
        },
        {
            "id": 1,
            "avatar": "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png",
            "username": "saurabh",
            "timestamp": "4 hours ago",
            "content": "this is all about the natures",
            "postimage": "https://5.imimg.com/data5/SELLER/Default/2021/1/NJ/GN/AS/75393646/3d-waterfall-nature-wallpaper.jpg",
            "likes": "500k",
            "comments": "100k",
            "shares": "40k"
        },{
            "id": 1,
            "avatar": "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png",
            "username": "saurabh",
            "timestamp": "4 hours ago",
            "content": "this is all about the natures",
            "postimage": "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
            "likes": "500k",
            "comments": "100k",
            "shares": "40k"
        }
    ]
    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <div class="post">
                            <div class="post-header">
                                <img src={post.avatar} alt="avatar" />
                                <div class="user-info">{post.username} <span class="timestamp">-  {post.timestamp}</span></div>
                            </div>
                            <div class="post-content">
                               {post.content}
                                <img src={post.postimage} alt="scenery" />
                            </div>
                            <div class="post-reactions">
                                <div>{post.likes}👍 Like</div>
                                <div>{post.comments}💬 Comment</div>
                                <div>{post.shares}↗️ Share</div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Posts; 
