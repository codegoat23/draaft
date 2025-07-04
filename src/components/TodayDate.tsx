import { IconCalendarEvent } from '@tabler/icons-react';
import React from 'react'

function TodayDate() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      }

    const formattedDate = today.toLocaleDateString('en-US', options)
  return (
    <div className='flex flex-row  gap-2 justify-center items-center font-normal'>
         <IconCalendarEvent />
         <span>{formattedDate}</span>
        
    </div>
  )
}

export default TodayDate