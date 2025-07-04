'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { supabase } from '@/lib/supabase'
import { IconLogout } from '@tabler/icons-react'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Logout error:', error)
    } else {
      router.push('/login') // or your login route
    }
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
    >
      <IconLogout size={16} />
      Logout
    </Button>
  )
}
