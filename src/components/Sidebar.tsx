// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CheckCircle, ChevronDown, ChevronRight, X } from "lucide-react"; // Added X for close button
import { useState, useEffect } from "react";
import { useCompletion } from "@/hooks/useCompletion"; // Assuming this hook exists

// Define the structure for course content (adjust as needed)
const courseStructure = [
  {
    moduleSlug: "01_introduction",
    title: "1. Introduction to Python & Vibe Coding",
    lessons: [
      { slug: "01_python_overview", title: "1.1 Python Overview" },
      { slug: "02_vibe_coding_definition", title: "1.2 What is Vibe Coding?" },
      { slug: "03_ai_benefits_limits", title: "1.3 AI: Benefits & Limitations" },
    ],
  },
  {
    moduleSlug: "02_environment_setup",
    title: "2. Environment Setup",
    lessons: [
      { slug: "01_installing_python", title: "2.1 Installing Python" },
      { slug: "02_setting_up_vscode", title: "2.2 Setting Up VSCode" },
      { slug: "03_installing_ai_assistant", title: "2.3 Installing AI Assistant" },
    ],
  },
  {
    moduleSlug: "03_python_basics",
    title: "3. Python Basics",
    lessons: [
      { slug: "01_variables_datatypes", title: "3.1 Variables & Data Types" },
      { slug: "02_operators", title: "3.2 Operators" },
      { slug: "03_control_structures", title: "3.3 Control Structures" },
      { slug: "04_functions_modules", title: "3.4 Functions & Modules" },
    ],
  },
  {
    moduleSlug: "04_intermediate_python",
    title: "4. Intermediate Python",
    lessons: [
      { slug: "01_oop_classes_objects", title: "4.1 OOP: Classes & Objects" },
      { slug: "02_oop_inheritance_encapsulation", title: "4.2 OOP: Inheritance & Encapsulation" },
      { slug: "03_data_structures", title: "4.3 Data Structures" },
      { slug: "04_file_handling", title: "4.4 File Handling" },
    ],
  },
  {
    moduleSlug: "05_advanced_python",
    title: "5. Advanced Python",
    lessons: [
      { slug: "01_decorators_generators", title: "5.1 Decorators & Generators" },
      { slug: "02_async_programming", title: "5.2 Async Programming" },
      { slug: "03_api_calls", title: "5.3 Working with APIs" },
      { slug: "04_frameworks_libs", title: "5.4 Intro to Frameworks/Libs" },
    ],
  },
  {
    moduleSlug: "06_vibe_coding_ai",
    title: "6. Vibe Coding with AI",
    lessons: [
      { slug: "01_ai_autocompletion", title: "6.1 AI for Autocompletion" },
      { slug: "02_generating_snippets", title: "6.2 Generating Snippets" },
      { slug: "03_debugging_assistance", title: "6.3 AI for Debugging" },
      { slug: "04_algorithm_design", title: "6.4 AI for Algorithm Design" },
    ],
  },
  {
    moduleSlug: "07_main_project_weather_app",
    title: "7. Project: Weather App",
    lessons: [
      { slug: "01_project_intro_api", title: "7.1 Project Intro & API" },
      { slug: "02_manual_walkthrough", title: "7.2 Manual Walkthrough" },
      { slug: "03_ai_assisted_walkthrough", title: "7.3 AI-Assisted Walkthrough" },
      { slug: "04_optional_visualization", title: "7.4 Optional: Visualization" },
    ],
  },
  {
    moduleSlug: "08_mini_projects",
    title: "8. Optional Mini-Projects",
    lessons: [
      { slug: "01_flask_weather_app", title: "8.1 Flask Weather App UI" },
      { slug: "02_pandas_analysis", title: "8.2 Weather Data Analysis" },
    ],
  },
  {
    moduleSlug: "09_best_practices_ethics",
    title: "9. Best Practices & Ethics",
    lessons: [
      { slug: "01_balancing_ai_manual", title: "9.1 Balancing AI & Manual" },
      { slug: "02_understanding_ethics", title: "9.2 Understanding & Ethics" },
    ],
  },
  {
    moduleSlug: "10_assessments_quizzes",
    title: "10. Assessments & Quizzes",
    lessons: [
      { slug: "01_quizzes_overview", title: "10.1 Quizzes Overview" },
      // Add quiz links here if they are separate pages
    ],
  },
  {
    moduleSlug: "11_resources",
    title: "11. Further Learning",
    lessons: [
      { slug: "01_further_learning", title: "11.1 Resources & Next Steps" },
    ],
  },
];

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

export default function Sidebar({ isMobileSidebarOpen, toggleMobileSidebar }: SidebarProps) {
  const pathname = usePathname();
  const { completedLessons, isLoaded } = useCompletion(); // For progress tracking
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  // Determine initially open module based on current path
  useEffect(() => {
    const currentModuleSlug = pathname.split("/")[2];
    if (currentModuleSlug) {
      setOpenModules((prev) => ({ ...prev, [currentModuleSlug]: true }));
    }
  }, [pathname]);

  const toggleModule = (moduleSlug: string) => {
    setOpenModules((prev) => ({ ...prev, [moduleSlug]: !prev[moduleSlug] }));
  };

  const sidebarContent = (
    <nav className="flex flex-col h-full">
      <div className="p-4 border-b border-border flex justify-between items-center md:block">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-primary">
          <BookOpen className="h-6 w-6" />
          <span>Python Vibe</span>
        </Link>
        {/* Close button for mobile sidebar */}
        <button 
          onClick={toggleMobileSidebar} 
          className="md:hidden p-2 -mr-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        <ul>
          {courseStructure.map((module) => (
            <li key={module.moduleSlug} className="px-2 py-1">
              <button
                onClick={() => toggleModule(module.moduleSlug)}
                className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent focus:text-accent-foreground transition-colors duration-150"
              >
                <span className="truncate text-left">{module.title}</span>
                {openModules[module.moduleSlug] ? (
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                )}
              </button>
              {openModules[module.moduleSlug] && (
                <ul className="pl-4 mt-1 border-l border-border ml-2">
                  {module.lessons.map((lesson) => {
                    const lessonPath = `/course/${module.moduleSlug}/${lesson.slug}`;
                    const isActive = pathname === lessonPath;
                    const isCompleted = isLoaded && completedLessons.has(`${module.moduleSlug}/${lesson.slug}`);
                    return (
                      <li key={lesson.slug} className="my-0.5">
                        <Link
                          href={lessonPath}
                          onClick={() => { if (isMobileSidebarOpen) toggleMobileSidebar(); }} // Close mobile sidebar on link click
                          className={`group flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors duration-150 
                            ${isActive 
                              ? "bg-primary text-primary-foreground font-semibold" 
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            }
                          `}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <span className="w-4 h-4 inline-block border border-muted-foreground rounded-full group-hover:border-accent-foreground flex-shrink-0"></span>
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-72 border-r border-border bg-background h-full">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar (Overlay) */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleMobileSidebar} // Close on overlay click
          aria-hidden="true"
        />
      )}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-background border-r border-border transform transition-transform duration-300 ease-in-out md:hidden 
                  ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}

