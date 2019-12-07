import React from 'react';

const MyPost = React.memo(({post}) => {
    return (
        <div className='mt-2'>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AtFfucscEuUUlO8QJLqDko3nhoUhZ7VkjwVLalD0Ck_A54hX&s'
                alt='avatar'
                width={32}
                height={32}
                className='rounded-circle mr-1'/>
            <span>{post.message}</span>
            <p className='ml-1'><i className='fa fa-thumbs-up'/>{post.count_like}</p>
        </div>
    )
});

export default MyPost;
