/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { id: 'home', name: 'Home', href: '/' },
    { id: 'development', name: 'Software development', href: '/software-development' },
    { id: 'music', name: 'Music', href: '/music' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function isCurrentPage(item, currentPageId){
    return item.id === currentPageId
}

export default function Navigation({ currentPageId }) {
    return (
        <Disclosure as="nav" className="bg-slate-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 right-0 flex items-center justify-end sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-sky-600 hover:text-sky-600 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6 text-sky-600" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6 text-sky-600" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    isCurrentPage(item, currentPageId)? 'underline underline-offset-2 decoration-2 text-sky-600' : 'text-sky-600 hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-sky-500',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={isCurrentPage(item, currentPageId) ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        isCurrentPage(item, currentPageId)? 'underline underline-offset-4 decoration-2 text-sky-600' : 'text-sky-600 hover:bg-sky-600 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={isCurrentPage(item, currentPageId) ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    {/* <div className="bg-sky-600 h-1"></div> */}
                </>
            )}
        </Disclosure>
    )
}
