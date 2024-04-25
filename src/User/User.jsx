import React from 'react'
import './UserStyle.css'

function User() {
   
    const user = [
        {
          firstName: 'dasdasd',
          lastName: '2sfdfgg',
          contactPhone: '13235457',
          email: 'asdssgj@fsf.com'
        }
      ]
    return (
        <>
        
            <div>
                <h1>User Info</h1>
                <p>FirstName: {user[0].firstName}</p>
                <p>LastName: {user[0].lastName}</p>
                <p>Contact Phone: {user[0].contactPhone}</p>
                <p>Email: {user[0].email}</p>
            </div>
        </>
    )
}

export default User

