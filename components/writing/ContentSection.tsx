import ContentHeaderPanel from "./ContentHeaderPanel";
import Image from 'next/image'
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function ContentSection() {
    return (
      <div className="relative pt-8 pb-16 bg-white overflow-hidden">
        <div className="relative">
          <div className="text-lg max-w-prose mx-auto">
            <ContentHeaderPanel post={{
                slug: 'about',
                title: 'Why we need to address cryptocurrency policy in the UK',
                description: 'I release a newsletter once a month, which distils hot topics and difficult concepts from across the tech world.',
                tags: ['Web3', 'Ethereum', 'UK'],
                date: '12 Sept 2021',
                reading_time: '6',
                image_url:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            }} />
          </div>
          <div className="mt-6 prose prose-indigo prose text-gray-900 mx-auto leading-6">       
            <p>
                Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
            </p>
            <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
                porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
                purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
            </p>
            <h2>From beginner to expert in 30 days</h2>
            <p>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                ipsum eu a sed convallis diam.
            </p>
            <blockquote>
                <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
                </p>
            </blockquote>
            <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            </p>
            <figure className="relative w-full">
                <div className="relative aspect-w-16 aspect-h-9 h-full w-full">
                <Image
                className="rounded-lg h-full w-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
                layout="fill"
                objectFit="cover"
                />
                </div>
                <figcaption className="">Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
            </figure>
            
            <h2>Everything you need to get up and running</h2>
            <p>
                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
            </p>
            <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            </p>
            </div>
          </div>
      </div>
    )
  }
  