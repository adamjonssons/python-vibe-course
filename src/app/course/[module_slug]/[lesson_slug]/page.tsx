// src/app/course/[module_slug]/[lesson_slug]/page.tsx
// This is now a Server Component

import fs from "fs";
import path from "path";
import LessonClientContent from "./LessonClientContent"; // Import the client component

// Define the structure for course content (must be accessible at build time)
// This should be consistent with the one in Sidebar.tsx or moved to a shared utils file
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
    lessons: [{ slug: "01_quizzes_overview", title: "10.1 Quizzes Overview" }],
  },
  {
    moduleSlug: "11_resources",
    title: "11. Further Learning",
    lessons: [{ slug: "01_further_learning", title: "11.1 Resources & Next Steps" }],
  },
];

// Function to generate static paths for all lessons
export async function generateStaticParams() {
  const paths = courseStructure.flatMap((module) =>
    module.lessons.map((lesson) => ({
      module_slug: module.moduleSlug,
      lesson_slug: lesson.slug,
    }))
  );
  return paths;
}

interface LessonPageProps {
  params: {
    module_slug: string;
    lesson_slug: string;
  };
}

// This is now an async Server Component
export default async function LessonPage({ params }: LessonPageProps) {
  const { module_slug, lesson_slug } = params;
  let markdownContent = "";
  let error: string | null = null;

  try {
    // Construct the path to the markdown file within the public directory
    const filePath = path.join(process.cwd(), "public", "course_content", module_slug, `${lesson_slug}.md`);
    markdownContent = fs.readFileSync(filePath, "utf-8");
  } catch (err: any) {
    console.error("Error reading markdown file:", err);
    error = `Could not load lesson content for ${module_slug}/${lesson_slug}. Please check the file path and ensure it exists. Expected at: public/course_content/${module_slug}/${lesson_slug}.md`;
    markdownContent = "# Lesson Content Not Found\n\nAn error occurred while trying to load the lesson content.";
  }

  return (
    <LessonClientContent 
      markdownContent={markdownContent} 
      module_slug={module_slug}
      lesson_slug={lesson_slug}
      error={error}
    />
  );
}

