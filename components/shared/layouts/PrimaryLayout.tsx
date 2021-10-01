/* This example requires Tailwind CSS v2.0+ */
import { Fragment, FC } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Projects', href: 'projects', current: true },
  { name: 'Writing', href: 'writing', current: false },
  { name: 'About', href: 'about', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

interface OpenProps {
    open: Boolean
}

interface ActiveProps {
    active: Boolean
}

type Props = {
    children?: React.ReactNode;
};

const PrimaryLayout:FC<Props> = ({children}) => {
  return (
    <div className="min-h-screen">
      <Disclosure as="nav" className="">
        {({ open }: OpenProps) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 w-full">
                <div className="flex lg:justify-between w-full">
                  <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                    <svg className="hidden lg:block h-4 w-auto" width="2287" height="140" viewBox="0 0 2287 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M198.6 0.599994V36H39.8V61.2H181.8V95.8H39.8V139H0.800001V0.599994H198.6ZM223.261 139V0.599994H263.861V139H223.261ZM477.48 0.599994H517.68V139H479.88L337.68 49.2V139H297.48V0.599994H335.28L477.48 90.4V0.599994ZM731.191 0.599994H771.391V139H733.591L591.391 49.2V139H551.191V0.599994H588.991L731.191 90.4V0.599994ZM1080.83 0.599994V34H922.027V53.8H1064.03V86.2H922.027V105.6H1080.83V139H883.027V0.599994H1080.83ZM1150.38 0.599994V101.8H1298.18V139H1109.78V0.599994H1150.38ZM1363.28 0.599994V101.8H1511.08V139H1322.68V0.599994H1363.28ZM1535.57 139V0.599994H1576.17V139H1535.57ZM1772.18 -1.04904e-05C1784.58 -1.04904e-05 1795.65 1.59999 1805.38 4.8C1815.25 7.86667 1823.52 12.4 1830.18 18.4C1836.98 24.2667 1842.12 31.5333 1845.58 40.2C1849.18 48.8667 1850.98 58.7333 1850.98 69.8V70C1850.98 81.0667 1849.18 90.9333 1845.58 99.6C1842.12 108.133 1836.98 115.4 1830.18 121.4C1823.52 127.267 1815.25 131.8 1805.38 135C1795.65 138.067 1784.58 139.6 1772.18 139.6H1680.38C1667.98 139.6 1656.92 138.067 1647.18 135C1637.45 131.8 1629.18 127.267 1622.38 121.4C1615.72 115.4 1610.58 108.133 1606.98 99.6C1603.52 90.9333 1601.78 81.0667 1601.78 70V69.8C1601.78 58.7333 1603.52 48.8667 1606.98 40.2C1610.58 31.5333 1615.72 24.2667 1622.38 18.4C1629.18 12.4 1637.45 7.86667 1647.18 4.8C1656.92 1.59999 1667.98 -1.04904e-05 1680.38 -1.04904e-05H1772.18ZM1772.18 104.2C1785.92 104.2 1795.98 101.2 1802.38 95.2C1808.78 89.2 1811.98 80.8 1811.98 70V69.8C1811.98 58.8667 1808.78 50.4 1802.38 44.4C1795.98 38.4 1785.92 35.4 1772.18 35.4H1680.38C1666.65 35.4 1656.58 38.4 1650.18 44.4C1643.92 50.4 1640.78 58.8667 1640.78 69.8V70C1640.78 80.8 1643.92 89.2 1650.18 95.2C1656.58 101.2 1666.65 104.2 1680.38 104.2H1772.18ZM2068.45 0.599994V37H1986.65V139H1946.05V37H1864.25V0.599994H2068.45ZM2286.81 0.599994V37H2205.01V139H2164.41V37H2082.61V0.599994H2286.81Z" fill="#111827"/>
                    </svg>
                    <svg className="block lg:hidden h-4 w-auto" width="422" height="139" viewBox="0 0 422 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M198.6 0.599976V36H39.8V61.2H181.8V95.8H39.8V139H0.799988V0.599976H198.6Z" fill="#111827"/>
                      <path d="M421.061 0.599976V34H262.261V53.8H404.261V86.2H262.261V105.6H421.061V139H223.261V0.599976H421.061Z" fill="#111827"/>
                    </svg>
                    </a>
                  </Link>
                  </div>
                  <div className="hidden sm:flex sm:-my-px sm:space-x-8 sm:ml-12">
                    {navigation.map((item) => (
                      <Link 
                        key={item.name}
                        href={`/${item.href}`}
                      >
                      <a
                        className={classNames(
                          item.current
                            ? 'text-gray-900'
                            : 'text-gray-500 hover:text-gray-700',
                          'px-1 inline-flex items-center text-md font-base'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={`/${item.href}`}
                  >
                  <a
                    className={classNames(
                      item.current
                        ? 'bg-blue-50 border-blue-400 text-blue-400'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="pb-10">
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">    
            {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PrimaryLayout