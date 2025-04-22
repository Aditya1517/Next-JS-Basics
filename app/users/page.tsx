import React from 'react'

// ts interface
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'}) // this cache is for the server side, not the client side. and it does not work in the browser
  // {cache:'no-store'} means that the data will not be cached and will be fetched from the server every time.
  // {cache:'force-cache'} means that the data will be cached and will be fetched from the cache if available.
  // {next:{revalidate: 10}} means that the data will be cached and will be revalidated every 10 seconds
  // {next:{revalidate: 0}} means that the data will be cached and will be revalidated every time the page is loaded.
  // {next:{revalidate: 10}} is used for static generation and it will revalidate the data every 10 seconds.
  const users: User[] = await res.json();
  return (
    
    <>
    <h1>Users</h1>
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage
