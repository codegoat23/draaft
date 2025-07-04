import React from 'react'
import { Button } from './ui/button'


function Featured2() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pt-4 lg:pr-8">
          <div className="lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-indigo-600">Planning</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-6xl">
            All Your Tasks, Notes, To-Dos Under One Roof
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
            Start with a daily note over coffee, capture quick to‑dos on at work, and keep track of personal goals in the same flexible space.
            </p>
            <Button className='text-white mt-2'>Explore Now</Button>
          </div>
        </div>

        <img
          alt="Product screenshot"
          src="/images/snapshot.webp"
          width={2432}
          height={1442}
          className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  </div>
  )
}

export default Featured2