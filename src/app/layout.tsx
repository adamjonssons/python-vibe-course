// src/app/layout.tsx
"use client"; // Add this because we will use useState and client-side logic

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState, useEffect } from "react"; // Import useState and useEffect

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = { // Metadata needs to be static or generated on server
// title: "Python Vibe Coding Course",
// description: "Learn Python from Beginner to Advanced with AI Assistance",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar on route change (optional, but good UX)
  // This would require usePathname, which is fine in a client component

  return (
    <html lang="en" className="dark">
      <head>
        {/* Moved title here as metadata object can cause issues with "use client" */}
        <title>Python Vibe Coding Course</title>
        <meta name="description" content="Learn Python from Beginner to Advanced with AI Assistance" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <div className="flex h-screen">
          <Sidebar 
            isMobileSidebarOpen={isMobileSidebarOpen} 
            toggleMobileSidebar={toggleMobileSidebar} 
          />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header toggleMobileSidebar={toggleMobileSidebar} />
            <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

