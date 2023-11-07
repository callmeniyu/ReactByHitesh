import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
  return (
      <div className='github-container'>
          <h2>Github Followers : {data.followers}</h2>
          <img src={ data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/callmeniyu`)
    const data = await response.json();
    console.log(data);
    return data
}

 
