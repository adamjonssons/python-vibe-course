// src/hooks/useCompletion.ts
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "pythonVibeCourseCompletion";

// Function to safely get data from localStorage
function getStoredCompletion(): Set<string> {
  if (typeof window === "undefined") {
    return new Set(); // Return empty set if on server-side
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Ensure it's an array before creating a Set
      if (Array.isArray(parsed)) {
        return new Set(parsed);
      }
    }
  } catch (error) {
    console.error("Error reading completion status from localStorage:", error);
  }
  return new Set();
}

// Custom hook to manage lesson completion state
export function useCompletion() {
  // Initialize state from localStorage
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  // Effect to load state from localStorage on mount (client-side only)
  useEffect(() => {
    setCompletedLessons(getStoredCompletion());
  }, []);

  // Function to toggle completion status for a lesson
  const toggleLessonCompletion = useCallback((lessonId: string) => {
    setCompletedLessons((prevCompleted) => {
      const newCompleted = new Set(prevCompleted);
      if (newCompleted.has(lessonId)) {
        newCompleted.delete(lessonId);
      } else {
        newCompleted.add(lessonId);
      }
      // Save updated state to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newCompleted)));
      } catch (error) {
        console.error("Error saving completion status to localStorage:", error);
      }
      return newCompleted;
    });
  }, []);

  // Function to check if a lesson is complete
  const isLessonComplete = useCallback(
    (lessonId: string) => {
      return completedLessons.has(lessonId);
    },
    [completedLessons]
  );

  return { completedLessons, toggleLessonCompletion, isLessonComplete };
}

