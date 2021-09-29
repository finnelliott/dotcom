/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import BlogPostPreview from './BlogPostPreview'

const posts = [
  {
    slug: 'about',
    title: 'Why we need to address cryptocurrency policy in the UK',
    description: 'I release a newsletter once a month, which distils hot topics and difficult concepts from across the tech world.',
    tags: ['Web3', 'Ethereum', 'UK'],
    date: '12 Sept 2021',
    reading_time: '6',
    image_url:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function BlogPostGrid() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {posts.map((post) => (
        <li
        key={post.title}
        >
          <BlogPostPreview post={post} />
        </li>
      ))}
    </ul>
  )
}
