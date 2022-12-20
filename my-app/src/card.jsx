import React from 'react'
import './card.css'

const Card = ({ post }) => {
  return (
    <>
      <section className='card'>
        <section className='cardHeader'>
          <div>
            <div className='cardHeaderName'>{post.name}</div>
            <div className='cardPlace'>{post.location} </div>
          </div>
          <span>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </span>
        </section>

        <section className='cardImage'>
          <img src={require("" + post.PostImage)} alt="place" />
        </section>
        <section className='cardAction'>
          <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
          <span><i className="fa fa-paper-plane-o" aria-hidden="true"></i></span>
          <span>{post.date}</span>
        </section>
        <section className='likes'>
          {post.likes}
        </section>
        <section className='discription'>
          {post.description}
        </section>
      </section>
    </>
  )
}

export default Card