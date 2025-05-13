# Module 6: Vibe Coding with AI

Now that you have a strong foundation in Python, from basics to advanced topics, let's dive into the practical application of "Vibe Coding." This module focuses on *how* to effectively use AI coding assistants like Tabnine (which we installed earlier) to enhance your development workflow, speed up tasks, and even aid in learning, while always emphasizing critical thinking and understanding.

## Lesson 6.1: Leveraging AI Code Autocompletion

The most immediate way AI assistants help is through intelligent code autocompletion. Tools like Tabnine go beyond simple keyword completion; they predict and suggest entire lines or blocks of code based on the context of your file and general programming patterns learned from vast datasets.

**How it Works (with Tabnine in VS Code):**

1.  **Start Typing:** As you type code in a Python file (`.py`) within VS Code (with the Tabnine extension active), Tabnine analyzes the surrounding code (variables defined, functions used, comments written, etc.).
2.  **See Suggestions:** Suggestions appear inline, often grayed out, directly after your cursor. They might range from completing a variable name to suggesting the entire body of a loop or function.
3.  **Accept or Ignore:**
    *   **Accept:** If the suggestion is exactly what you want, press the `Tab` key. The suggested code will be inserted.
    *   **Partial Accept:** Sometimes you might only want the first part of a suggestion. You can often accept word by word using `Ctrl+RightArrow` (or similar, check Tabnine documentation/settings).
    *   **Ignore:** If the suggestion isn't helpful, just keep typing. The suggestion will disappear or change as you provide more input.
4.  **Multiple Suggestions:** Occasionally, the AI might have multiple ideas. You might see prompts to cycle through suggestions (check Tabnine's specific keybindings or UI elements).

**Practical Examples:**

*   **Variable Names:** If you have `customer_first_name`, and start typing `customer_`, it will likely suggest `customer_last_name` or `customer_email`.
*   **Function Calls:** If you import `requests` and type `response = requests.`, it will suggest common methods like `get(`, `post(`, etc., and might even suggest common parameters based on context.
*   **Boilerplate Code:**
    ```python
    # Type this:
    # Define a function to read a file line by line
    def read_file_lines(filepath):
        # Tabnine might suggest the entire 'with open...' block here
        # Press Tab if the suggestion looks good:
        try:
            with open(filepath, 'r') as f:
                lines = f.readlines()
            return lines
        except FileNotFoundError:
            print(f"Error: File not found at {filepath}")
            return None
    ```
*   **Loop Structures:**
    ```python
    my_list = [1, 2, 3, 4, 5]
    # Type this:
    # Iterate through my_list and print each item
    for item in my_list:
        # Tabnine will likely suggest:
        print(item)
    ```
*   **Dictionary Access:**
    ```python
    student = {"name": "Bob", "grade": 85}
    # Type this:
    # Print the student's name
    print(student[
        # Tabnine might suggest 'name'])
    ```

**Tips for Effective Autocompletion:**

1.  **Write Clear Code:** The better structured and named your existing code is, the better context the AI has, leading to more relevant suggestions.
2.  **Use Meaningful Variable Names:** `process_customer_data` gives the AI more clues than `proc_data` or `x`.
3.  **Write Comments (Sometimes):** A comment explaining your intent for the *next* block of code can significantly guide the AI. For example:
    ```python
    # Calculate the factorial of n using recursion
    def factorial(n):
        # Tabnine is now primed to suggest the recursive factorial logic
        if n == 0:
            return 1
        else:
            return n * factorial(n-1)
    ```
4.  **Don't Fight It, Guide It:** If the initial suggestion isn't perfect, keep typing a few more characters to refine the context.
5.  **Learn Common Patterns:** Pay attention to the patterns Tabnine suggests. It often reflects common Python idioms, which can be a learning opportunity.
6.  **Review, Review, Review:** **Never blindly accept autocompletions.** Always read the suggested code. Does it do what you expect? Is it efficient? Is it secure? Does it handle edge cases? You are still the programmer in charge.

**Exercise (Manual Coding with AI Assistance):**

1.  Open a new Python file in VS Code.
2.  Make sure Tabnine is active.
3.  Try writing the following, paying attention to Tabnine's suggestions and using `Tab` to accept when appropriate:
    *   Import the `random` module.
    *   Define a list called `colors` containing "red", "green", "blue", "yellow".
    *   Write a comment: `# Choose a random color from the list`.
    *   Start typing `random_color = random.` and see if Tabnine suggests `choice(colors)`. Accept it.
    *   Print the `random_color`.
    *   Write a comment: `# Check if the color is green`.
    *   Start typing `if random_color ==` and see if it suggests `"green":`. Accept it.
    *   Inside the `if` block, type `print(` and see if it suggests something like `"It's green!"`. Accept it.

Code autocompletion is just the first layer of AI assistance. In the next lesson, we'll explore how to explicitly ask the AI to generate larger code snippets based on your instructions.
