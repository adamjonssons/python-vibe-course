// src/components/Header.tsx
"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react"; // Import Menu icon for hamburger

// A simple function to derive a title from the path (can be improved)
function getTitleFromPath(pathname: string): string {
  if (pathname === "/") {
    return "Welcome";
  }
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length >= 3 && parts[0] === "course") {
    const lessonSlug = parts[parts.length - 1];
    return lessonSlug
      .replace(/^\d+_/, "")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return "Python Vibe Coding";
}

interface HeaderProps {
  toggleMobileSidebar: () => void;
}

export default function Header({ toggleMobileSidebar }: HeaderProps) {
  const pathname = usePathname();
  const title = getTitleFromPath(pathname);

  return (
    <header className="h-14 flex items-center px-4 md:px-6 border-b border-border bg-background sticky top-0 z-30">
      {/* Hamburger menu button - visible only on small screens */}
      <button 
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 -ml-2 mr-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <h1 className="text-lg font-medium text-foreground truncate">{title}</h1>
      {/* Add other header elements here if needed */}
    </header>
  );
}

