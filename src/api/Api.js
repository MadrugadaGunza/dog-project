import React from 'react'
import UserPost from './endpoint/UserPost'
import TokenPost from './endpoint/TokenPost'
import PhotoPost from './endpoint/PhotoPost'

const Api = () => {
    return (
        <div>
            <h2>User Post</h2>
            <UserPost />
            <h2>Token Post</h2>
            <TokenPost />
            <h2>Photo Post</h2>
            <PhotoPost />
        </div>
    )
}

export default Api