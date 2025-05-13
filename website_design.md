## Python Vibe Coding Course Website Design

### 1. Overall Structure & Navigation

*   **Framework:** Next.js
*   **Layout:** A main content area with a persistent sidebar for navigation between course modules and sections.
*   **Navigation:**
    *   **Sidebar:** Lists all main course modules (Introduction, Setup, Basics, etc.) and their sub-sections. Clicking expands/collapses modules and navigates to the selected lesson.
    *   **Top Bar (Optional):** Could include the course title, user progress indicator (manual completion), and link to the discussion forum.
*   **Pages/Routes:**
    *   `/`: Home/Landing page (brief course overview, enrollment/start button).
    *   `/course/[module_slug]/[lesson_slug]`: Individual lesson pages.
    *   `/resources`: Curated list of external resources.
    *   `/quizzes/[quiz_id]`: Pages for quizzes.
    *   `/projects/main`: Main weather app project page.
    *   `/projects/mini/[project_id]`: Optional mini-project pages.
    *   `/discussion`: Link to the external discussion forum service.

### 2. Styling & Theme

*   **Mode:** Dark mode by default.
*   **Color Scheme:** Dark background (e.g., near-black or very dark gray), with purple and magenta accents for headings, links, buttons, code highlighting, and interactive elements.
*   **Typography:** Clean, readable sans-serif font.
*   **Code Blocks:** Clear syntax highlighting suitable for Python, using the purple/magenta theme.

### 3. Content Page Layout

*   **Header:** Lesson title.
*   **Content Area:** Mix of text explanations, embedded code examples (potentially interactive), placeholder video sections, images/diagrams where applicable.
*   **Navigation:** "Previous" and "Next" lesson buttons at the bottom.
*   **Progress:** A checkbox or button for the user to manually mark the lesson as complete.

### 4. Key Components

*   **Lesson Viewer:** Displays text, code, video placeholders.
*   **Code Runner (Optional/Future):** Interactive code execution environment (initially just static code blocks).
*   **Quiz Component:** Renders multiple-choice and code-based questions.
*   **Progress Tracker:** Simple visual indicator based on manually marked lessons (e.g., in local storage or via a simple backend if needed later).
*   **Resource List:** Formatted list of links with descriptions.

### 5. External Integrations

*   **Discussion Forum:** Link to an external service (e.g., Discord, Discourse, or a dedicated platform). The specific service needs to be chosen later.

This design aims for a modern, engaging, and user-friendly experience tailored for beginners learning Python with AI assistance.
