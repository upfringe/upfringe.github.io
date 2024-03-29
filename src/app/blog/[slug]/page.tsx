import NotFound from "@/app/not-found";
import BlogDetails from "@/components/Blogs/BlogDetails";
import RenderBlogContent from "@/components/Blogs/RenderBlogContent";
import Comments from "@/components/Elements/Comments";
import Tag from "@/components/Elements/Tag";
import { siteMetadata } from "@/libs/siteMetadata";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === params.slug && post.isPublished
  );
  if (!post) {
    return;
  }
  const publishedAt = new Date(post.publishedAt).toISOString();
  const modifiedAt = new Date(post.updatedAt || post.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (post.image) {
    imageList =
      typeof post.image.filePath === "string"
        ? [siteMetadata.siteUrl + post.image.filePath.replace("../public", "")]
        : post.image.filePath;
  }

  const ogImages = imageList.map((image) => {
    return {
      url: image.includes("http") ? image : siteMetadata.siteUrl + image,
    };
  });
  const authors = post.author ? [post.author] : siteMetadata.author;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: siteMetadata.siteUrl + post.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: ogImages, // Must be an absolute URL
      },
    },
  };
}

const BlogContent = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    return <NotFound />;
  }
  let imageList = [siteMetadata.socialBanner];
  if (post.image) {
    imageList =
      typeof post.image.filePath === "string"
        ? [siteMetadata.siteUrl + post.image.filePath.replace("../public", "")]
        : post.image.filePath;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.description,
    image: imageList,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: post.author ? [post.author] : siteMetadata.author,
        url: siteMetadata.github,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center  relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={post.tags[0]}
              link={`/categories/${slug(post.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {post.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={post.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={post.image.blurhashDataUrl}
            alt={post.title}
            width={post.image.width}
            height={post.image.height}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <BlogDetails post={post} />
        <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10 ">
          <RenderBlogContent post={post} />
          <div className="col-span-12  lg:col-span-4">
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {post.toc.map(
                  (heading: {
                    level: string;
                    text: any;
                    slug: string | undefined;
                  }) => {
                    return (
                      <li key={`#${heading.slug}`} className="py-1 ">
                        <a
                          href={`#${heading.slug}`}
                          data-level={heading.level}
                          className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-6 flex items-center justify-start"
                        >
                          {heading.level == "three" ? (
                            <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                              &nbsp;
                            </span>
                          ) : null}
                          <span className="hover:underline">
                            {heading.text}
                          </span>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </details>
          </div>
        </div>
      </article>
      <Comments />
    </>
  );
};

export default BlogContent;
