import React from 'react'
import './UserStyle.css'

function User(props) {
    const user = props.user;
    return (
        <>
            <div>
                <h1>User Info</h1>
                <p>FirstName: {user.firstName}</p>
                <p>LastName: {user.lastName}</p>
                <p>Contact Phone: {user.contactPhone}</p>
                <p>Email: {user.email}</p>
            </div>
        </>
    )
}

export default User

