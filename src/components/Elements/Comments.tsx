'use client'
import Giscus from '@giscus/react';

const Comments = () => {
  const repo=process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId=process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const categoryId=process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;
  return (
    <div className='rounded-t-2xl bg-slate-700 mt-4 mx-4 md:px-16 py-2'>
        <Giscus
          id="comments"
          repo={repo as `${string}/${string}`}
          repoId={repoId as string}
          category="Q&A"
          categoryId={categoryId}
          mapping="title"
          strict='1'
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
    </div>
  )
}

export default Comments