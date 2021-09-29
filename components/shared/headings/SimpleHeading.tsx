import { FC } from "react"

/* This example requires Tailwind CSS v2.0+ */
type Props = {
    content?: string
}

const SimpleHeading:FC<Props> = ({ content }) => {
    return (
      <div className="pb-5">
        <h3 className="font-display text-lg leading-6 font-medium text-gray-900">{content}</h3>
      </div>
    )
  }
  

export default SimpleHeading