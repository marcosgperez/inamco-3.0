/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../Images/Logo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const pathName = window.location.pathname;
    useEffect(()=>{
        const sliced = pathName.slice(1)
        if (sliced == "") {
            return setNavigation ([
                { name: 'Inicio', current: true, path:"/" },
                { name: 'Nosotros', current: false, path:"/nosotros" },
                { name: 'Contacto', current: false, path:"/contacto" },
                { name: 'Trabajos', current: false, path:"/trabajos" }
            ])
        }
        const whitUp = sliced.replace(/^./, sliced[0].toUpperCase())
        const maped = navigation.map(n=>{
            if (n.name === whitUp) {
                return ({
                    current:true,
                    name: n.name,
                    path: n.path
                })
            } else {
                return {
                    current: false,
                    name: n.name,
                    path: n.path
                }
            }
        });
        setNavigation(maped);
    },[pathName])

    const [navigation, setNavigation] = useState([
        { name: 'Inicio', current: false, path:"/" },
        { name: 'Nosotros', current: false, path:"/nosotros" },
        { name: 'Contacto', current: false, path:"/contacto" },
        { name: 'Trabajos', current: false, path:"/trabajos" }
    ])

    let naver = useNavigate();
    const setCurrent = e => {
        e.preventDefault();
        let ward;
        const maped = navigation.map(n=>{
            if (n.name === e.target.name) {
                return ({
                    current:true,
                    name: n.name,
                    path: n.path
                }, ward = n)
            } else {
                return {
                    current: false,
                    name: n.name,
                    path: n.path
                }
            }
        });
        setNavigation(maped);
        naver(ward.path)
    }

    return (
        <nav class='sticky top-0 z-50'>
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
            <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-auto pt-5 pb-5">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                    <img
                        className="block lg:hidden h-16 w-auto"
                        src={logo}
                        alt="Inamco"
                    />
                    <img
                        className="hidden lg:block h-24 w-auto"
                        src={logo}
                        alt="Inamco"
                    />
                    </div>
                    <div className="xl:flex xl:items-center hidden sm:items-center sm:flex sm:ml-6">
                    <div className="flex space-x-4 ">
                        {navigation.map((item) => (
                            <button>
                                <a  onClick={(e)=>setCurrent(e)}
                                    key={item.name}
                                    href={item.href}
                                    name={item.name}
                                    className={classNames(
                                    item.current ? 'bg-second-color text-black' : 'text-black hover:bg-fourth-color hover:text-black',
                                    'px-3 py-2 rounded-md text-l font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            </button>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <div                     onClick={(e)=>setCurrent(e)}>
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        name={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-third-color text-black' : 'text-black hover:bg-fourth-color hover:text-black',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                        </div>
                ))}
                </div>
            </Disclosure.Panel>
            </>)}
        </Disclosure>
        </nav>)
        
}
