'use client'

import React, { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

import {
  IconInnerShadowTop,
  IconDashboard,
  IconFolder,
  IconCalendar,
  IconArchive,
  IconSettings,
  IconHelp,
  IconFocus,
  IconBriefcase,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (user && user.email) {
        setUserEmail(user.email)
      } else {
        console.error("No user logged in or error occurred", error)
      }
    }

    fetchUser()
  }, [])

  const data = {
    user: {
      name: "Draaft",
      email: userEmail || "Loading...",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      { title: "Dashboard", url: "#", icon: IconDashboard },
      { title: "Tasks", url: "#", icon: IconFolder },
      { title: "Calendar", url: "#", icon: IconCalendar },
      { title: "Archives", url: "#", icon: IconArchive },
    ],
    navSecondary: [
      { title: "Settings", url: "#", icon: IconSettings },
      { title: "Get Help", url: "#", icon: IconHelp },
    ],
    labels: [
      { name: "Focus", url: "#", icon: IconFocus },
      { name: "Work", url: "#", icon: IconBriefcase },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <Image src="/images/draafticon.png" alt="" className="w-auto h-18"/>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.labels} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
