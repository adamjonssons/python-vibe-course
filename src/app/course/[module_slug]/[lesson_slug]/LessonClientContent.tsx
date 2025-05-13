// src/app/course/[module_slug]/[lesson_slug]/LessonClientContent.tsx
"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CompletionButton from "@/components/CompletionButton";
import Discussion from "@/components/Discussion";

interface LessonClientContentProps {
  markdownContent: string;
  module_slug: string;
  lesson_slug: string;
  error?: string | null;
}

export default function LessonClientContent({
  markdownContent,
  module_slug,
  lesson_slug,
  error,
}: LessonClientContentProps) {
  if (error) {
    return (
      <article className="prose prose-invert max-w-none p-8">
        <h1 className="text-destructive">Error Loading Lesson</h1>
        <p className="text-destructive-foreground">{error}</p>
        <p>
          Please ensure the markdown file at 
          <code>public/course_content/{module_slug}/{lesson_slug}.md</code> exists.
        </p>
      </article>
    );
  }

  return (
    <article className="prose prose-invert max-w-none p-4 md:p-6 lg:p-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
      <CompletionButton lessonId={`${module_slug}/${lesson_slug}`} />
      <Discussion />
    </article>
  );
}

