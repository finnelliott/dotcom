import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { FC } from "react"
import Image from 'next/image'
import Link from 'next/link'

type PostProps = {
    post : {
        slug: string;
        title?: string;
        description?: string;
        tags?: string[];
        date?: string;
        reading_time?: string;
        image_url: string;
    }
}

const BlogPostPreview: FC<PostProps> = ({ post }) => {
    return (
      <Link
        href={`/${post.slug}`}
      >
      <a
      className="col-span-1 flex flex-col text-left bg-white border border-gray-200 bg-clip-border rounded-lg shadow divide-y divide-gray-200 overflow-hidden hover:bg-gray-50 hover:shadow-lg transition-shadow"
      >
        <div className="flex-1 flex flex-col">
          <div className="relative h-48">
            <Image className="h-48 w-full overflow-hidden" objectFit="cover" src={post.image_url} layout="fill" alt="" />
          </div>
          <div className="flex-1 flex flex-col p-4">
          <h3 className="text-gray-900 text-lg font-semibold">{post.title}</h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dt className="sr-only">description</dt>
            <dd className="text-gray-500 text-sm md:text-md">{post.description}</dd>
            <dt className="sr-only">Role</dt>
            
          </dl>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <div className="flex text-gray-400 text-sm justify-start items-center uppercase">
            <span className="">{post.date}</span>
            <div className="ml-3 w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="ml-3">{post.reading_time}{` `}min read</span>
          </div>
          <span className="text-gray-400 text-xs space-x-2 flex mt-2">
            {post.tags?.map((tag) => (
                <div key={tag} className="py-1 px-2 border border-gray-400 rounded-md w-min text-sm">{tag}</div>
            ))}
          </span>
        </div>
      </a>
      </Link>
    )
}

export default BlogPostPreview