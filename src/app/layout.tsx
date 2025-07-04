import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  subsets:["latin"],
  weight: ['100','200','300','400','600','700']
  
})

export const metadata: Metadata = {
  title: "Draaft",
  description: "Draaft is your calm space to think, plan, and create. A minimal, second-brain app that blends joy with focus — track tasks, moods, and ideas all in one beautiful flow.",
  icons: {
    icon: '/images/draaft.ico', // path to the favicon in the public folder
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
