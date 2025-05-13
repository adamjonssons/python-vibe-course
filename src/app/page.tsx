// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.14))] text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to Python Vibe Coding!</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        Your journey from beginner to advanced Python programmer, enhanced with AI assistance. 
        Navigate through the modules using the sidebar to start learning.
      </p>
      {/* Optional: Link to the first lesson */}
      <Link 
        href="/course/introduction/01_python_overview" 
        className="inline-flex items-center justify-center px-6 py-3 
                   bg-primary text-primary-foreground font-medium rounded-md 
                   hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Start Learning
      </Link>
    </div>
  );
}

