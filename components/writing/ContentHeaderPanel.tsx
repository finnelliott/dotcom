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

const ContentHeaderPanel: FC<PostProps> = ({ post }) => {
    return (
        <>
        <h3 className="text-gray-900 text-3xl font-medium">{post.title}</h3>    
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-left md:items-center mt-2 justify-between w-full">
          <div className="flex text-gray-400 text-sm justify-start items-center uppercase h-full">
            <span className="">{post.date}</span>
            <div className="ml-3 w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="ml-3">{post.reading_time}{` `}min read</span>
          </div>
          <span className="text-gray-400 text-xs space-x-2 flex h-full items-center">
            {post.tags?.map((tag) => (
                <div key={tag} className="py-1 px-2 border border-gray-400 rounded-md w-min text-sm">{tag}</div>
            ))}
          </span>
        </div>
        <p className="py-8 text-xl text-gray-900 leading-7 border-b border-gray-200">
              {post.description}
        </p>
        </>
    )
}

export default ContentHeaderPanel