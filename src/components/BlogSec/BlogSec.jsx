import React from 'react'
import Headings from '../roots/Headings'
import Blog from '../Layout/Blog';
import { demoimg1, demoimg2, demoimg3 } from '../../Assets'


const BlogSec = () => {
  return (
    <div className='Blogs_sec'>
      <div className="container">
        <Headings title='Learn More Than Just an AI Image ' spanhead='News & Blog' highlighted='Generator'/>
        <div className="Blogs-sec_warp">
            <Blog title='Write detailed prompts and generate almost anything' img_blog={demoimg1}/>
            <Blog title='Write detailed prompts and generate ' img_blog={demoimg2}/>
            <Blog title='detailed prompts and generate almost anything' img_blog={demoimg3}/>
        </div>
      </div>
    </div>
  )
}

export default BlogSec
