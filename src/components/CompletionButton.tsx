// src/components/CompletionButton.tsx
"use client";

import { useCompletion } from "@/hooks/useCompletion";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button is available
import { Check, Circle } from "lucide-react";

interface CompletionButtonProps {
  lessonId: string; // Unique ID like "module_slug/lesson_slug"
}

export default function CompletionButton({ lessonId }: CompletionButtonProps) {
  const { isLessonComplete, toggleLessonCompletion } = useCompletion();
  const isComplete = isLessonComplete(lessonId);

  return (
    <Button
      variant={isComplete ? "secondary" : "default"} // Use secondary style when complete
      onClick={() => toggleLessonCompletion(lessonId)}
      className="mt-8 mb-4 w-full md:w-auto" // Add some margin
    >
      {isComplete ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Mark as Incomplete
        </>
      ) : (
        <>
          <Circle className="mr-2 h-4 w-4" />
          Mark as Complete
        </>
      )}
    </Button>
  );
}

