import React from 'react'
import { allBlogs } from 'contentlayer/generated'
import BlogCoverSection from '@/components/Blogs/BlogCoverSection'
import FeaturedPosts from '@/components/Blogs/FeaturedPosts'
import RecentPosts from '@/components/Blogs/RecentPosts'

const BlogHomePage = () => {
  const allBlog=allBlogs.filter(post=>post.isPublished && post)
  return (
    <div className='w-full inline-block'>
        <BlogCoverSection posts={allBlog}/>
        <FeaturedPosts posts={allBlog} />
        <RecentPosts posts={allBlog} />
    </div>
  )
}

export default BlogHomePage