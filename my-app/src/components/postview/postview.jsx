import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../card'

const Postview = () => {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/user").then((res)=>res.json()).then((data)=>{
      setPosts(data)
    }).catch((err)=>{
      if(err){
        console.log(err)
      }
    })
  },[])
  return (
    <div className='postContainer'>
      {posts.map((post, index)=>{
          return (
            <Card post={post} key={index}/>
          )
      })}
    </div>
  )
}

export default Postview