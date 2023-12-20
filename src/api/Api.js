import React from 'react'
import UserPost from './endpoint/UserPost'
import TokenPost from './endpoint/TokenPost'

const Api = () => {
    return (
        <div>
            <h2>User Post</h2>
            <UserPost />
            <h2>Token Post</h2>
            <TokenPost />
        </div>
    )
}

export default Api