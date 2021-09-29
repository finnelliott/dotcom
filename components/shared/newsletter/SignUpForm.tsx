import SimpleHeading from "../headings/SimpleHeading";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SignUpForm() {
    return (
      <div className="">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <SimpleHeading content="Subscribe" />
            <p className="max-w-3xl text-sm text-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat.
            </p>
          </div>
          <div className="mt-5 lg:mt-0 lg:ml-8">
            <form className="sm:flex" onSubmit={(e)=>e.preventDefault()} data-splitbee-event="Submit Newsletter Form">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {/* <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium underline">
                Privacy Policy.
              </a>
            </p> */}
          </div>
        </div>
      </div>
    )
  }
  