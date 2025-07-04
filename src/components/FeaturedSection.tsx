'use client';
import React from 'react'
import { Calendar } from './ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { IconBackpack, IconBell, IconBellFilled, IconBriefcase, IconCalendarCheck, IconFile, IconFocus, IconMountain, IconPlus, IconSchool } from '@tabler/icons-react';
import { Badge } from './ui/badge';

function FeaturedSection() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Plan Easily</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Create your second Brain with Draaft Today.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                 Set Goals
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Easily plan and visualize your Goals. Create To-dos, Notes and goals
                </p>
              </div>
              <div className=" relative  w-full flex  justify-center items-center h-100">
               <Card className='bg-black text-white w-70'>
                <CardHeader>
                    <CardTitle>Move Goal</CardTitle>
                    <CardDescription>Set your Daily Goals</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-5'>
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                   <Checkbox />
                </CardContent>
                <CardFooter>
                    <Button className='w-full'>Set Goals</Button>
                </CardFooter>
               </Card>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Deadline</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                 Set your own deadline to motivate you
                  
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
              
              <Card className='w-70'>
                <CardHeader>
                  <CardTitle className='text-[16px] flex flex-row items-center gap-2'><IconCalendarCheck className='size-5.5'/> Deadline</CardTitle>
                  <CardDescription className='text-[11px]'>set  <b>Deadline</b></CardDescription>
                </CardHeader>
              </Card>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Your Space, Your Flow</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Create a personalized workspace to organize tasks, plan, projects and priorities - all in one place.Whether you're managing School, work or personal Goals. Boost your productivity.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2 justify-center gap-2">
                <Badge className='bg-white flex flex-row gap-2 text-black outline'>
                  <IconFocus className='text-red-600'/>
                  <span>Focus</span>
                </Badge>
                <Badge className='bg-white flex flex-row gap-2 text-black outline'>
                  <IconBriefcase className='text-amber-700'/>
                  <span>work</span>
                </Badge>
                <Badge className='bg-white flex flex-row gap-2 text-black outline'>
                  <IconSchool className='text-blue-600'/>
                  <span>School</span>
                </Badge>
                <Badge className='bg-white flex flex-row gap-2 text-black outline'>
                  <IconFile className='text-yellow-300'/>
                  <span>Projects</span>
                </Badge>
                <Badge className='bg-white flex flex-row gap-2 text-black outline'>
                  <IconMountain className='text-green-500'/>
                  <span>Goals</span>
                </Badge>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Calendar
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Stay organized by planning your tasks directly with the calendar. Schedule, view, and manage your to-dos by date so you never miss a deadline.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow flex justify-center items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border h-80"
  />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection