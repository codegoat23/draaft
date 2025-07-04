import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { Separator } from './ui/separator'

const data = {
    company: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Pricing',
            url: '/',

        },
        {
            name: 'FAQs',
            url: '/'
        },
        {
            name: 'login',
            url: '/login'
        }
    ],
    product: [
        {
            name: "What's new",
            url: '/'
        },
        {
            name: 'Writting',
            url: '/',

        },
        {
            name: 'Planning',
            url: '/'
        },
        {
            name: 'Calendar',
            url: '/'
        }
    ],
    community: [
        {
            name: "Instagram",
            url: '/'
        },
        {
            name: 'Facebook',
            url: '/',

        },
        {
            name: 'LinkedIn',
            url: '/'
        },
        {
            name: 'Twitter',
            url: '/'
        }
    ]
}



function Footer() {
    const date : Date = new Date()
    
  return (
    <div className="mt-10 py-6">
    <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
      <li>© Draaft {new Date().getFullYear()}</li>
      <span className="hidden sm:inline">·</span>
      <li className="hover:underline cursor-pointer">Login</li>
      <span className="hidden sm:inline">·</span>
      <li className="hover:underline cursor-pointer">Signup</li>
    </ul>
  </div>
  
  )
}

export default Footer