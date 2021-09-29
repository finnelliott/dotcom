import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { FC } from "react"
import Image from 'next/image'

type PostProps = {
    post : {
        title?: string;
        description?: string;
        tags?: string[];
        date?: string;
        reading_time?: string;
        image_url?: string;
    }
}

const BlogPostPreview: FC<PostProps> = ({ post }) => {
    return (
      <>
        <div className="flex-1 flex flex-col">
          <Image className="h-32 flex-shrink-0 mx-auto w-full" src={`${post.image_url}`} layout="fill" alt="" />
          <div className="flex-1 flex flex-col p-4">
          <h3 className="text-gray-900 text-lg font-semibold">{post.title}</h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dt className="sr-only">description</dt>
            <dd className="text-gray-500 text-sm">{post.description}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="text-gray-400 text-xs space-x-2 flex ">
                {post.tags?.map((tag) => (
                    <div className="py-1 px-2 border border-gray-400 rounded-md w-min text-sm">{tag}</div>
                ))}
              </span>
            </dd>
          </dl>
          </div>
        </div>
        <div>
          <div className="flex text-gray-400 text-sm justify-start py-2 px-4 items-center uppercase">
            <span className="">{post.date}</span>
            <div className="ml-3 w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="ml-3">{post.reading_time}{` `}min read</span>
          </div>
        </div>
      </>
    )
}

export default BlogPostPreview