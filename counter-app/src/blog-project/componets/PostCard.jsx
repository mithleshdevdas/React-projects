// @ts-nocheck
import React from 'react'

import Service from '../appwrite/conf'

import {Link} from 'react-router-dom'

function PostCard({$id,title,featureImage}) {
  return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-center mb-4'>
                <img src={Service.getFilePreview(featureImage)} alt={title} />  
              </div>
              <h2>{ title}</h2>
          </div>
   </Link>
  )
}

export default PostCard