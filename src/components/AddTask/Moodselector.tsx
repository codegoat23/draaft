'use client';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React from 'react';

const moods = [
  { value: 'excited', label: '😄 Excited' },
  { value: 'neutral', label: '😐 Neutral' },
  { value: 'anxious', label: '😟 Anxious' },
  { value: 'frustrated', label: '😤 Frustrated' },
  { value: 'motivated', label: '💡 Motivated' },
];

type Props = {
  selectedMood: string;
  setSelectedMood: (mood: string) => void;
};

export default function Moodselector({ selectedMood, setSelectedMood }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          {selectedMood ? moods.find(m => m.value === selectedMood)?.label : 'Select Mood 😉'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        <ul className="space-y-2">
          {moods.map((mood) => (
            <li
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 text-sm"
            >
              {mood.label}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
