import BlogLayoutThree from "@/components/Blogs/BlogLayout/BlogLayoutThree";
import Categories from "@/components/Blogs/Categories";
import { allBlogs } from "contentlayer/generated";
import GithubSlugger,{slug} from 'github-slugger'

const slugger=new GithubSlugger()

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
 const categories:string[]=[];
 const paths=[{slug:"all"}]

allBlogs.map((blog)=>{
  if(blog.isPublished){
    blog.tags.map(tag=>{
      let slugified=slugger.slug(tag)
      if(!categories.includes(slugified)){
        categories.push(slugified)
        paths.push({slug:slugified})
      }
    })
  }
})

  return paths;
}

export async function generateMetadata({params}:{ params :{ slug: string }}) {
  return {
    title: `${params.slug.replaceAll('-',' ')} Blogs`,
    description:`Learn more about ${params.slug === "all" ? "Technollogy": params.slug} through our collection of expert blogs and tutorials`,
  }
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const allCategories = ["all"];
  const posts = allBlogs.filter((post) => {
    if(post.isPublished){
    return post.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
}});
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-32 flex flex-col ">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {posts.map((post, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree post={post} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
