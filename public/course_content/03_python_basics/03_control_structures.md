## Lesson 3.3: Control Structures (Conditional Statements and Loops)

Control structures allow you to dictate the flow of execution in your program. You can make decisions based on conditions and repeat blocks of code multiple times.

**1. Conditional Statements (`if`, `elif`, `else`)**

These structures allow your program to execute different blocks of code based on whether certain conditions are `True` or `False`.

*   **`if`:** Executes a block of code only if its condition is `True`.
*   **`elif` (else if):** Checks another condition if the preceding `if` (or `elif`) condition was `False`. You can have multiple `elif` statements.
*   **`else`:** Executes a block of code if none of the preceding `if` or `elif` conditions were `True`. It's optional.

**Indentation is Crucial:** Python uses indentation (typically 4 spaces) to define which lines of code belong to the `if`, `elif`, or `else` block. Consistent indentation is mandatory.

```python
temperature = 22

print("Checking temperature...")

if temperature > 30:
    print("It's hot outside!")
    print("Wear light clothes.")
elif temperature > 20: # This condition is True (22 > 20)
    print("It's a pleasant temperature.") # This block executes
elif temperature < 10:
    print("It's cold!")
    print("Wear a warm jacket.")
else:
    print("It's moderate weather.")

print("...temperature check complete.") # This line is outside the if/elif/else block

# Example with boolean
is_logged_in = False

if not is_logged_in:
    print("Please log in to continue.")
else:
    print("Welcome back!")
```

**2. Loops**

Loops are used to execute a block of code repeatedly.

*   **`for` Loop:** Iterates over a sequence (like a list, tuple, dictionary, set, or string) or other iterable object. It executes the loop body once for each item in the sequence.

    ```python
    # Looping through a list (we'll cover lists in detail later)
    fruits = ["apple", "banana", "cherry"]
    print("\nAvailable fruits:")
    for fruit in fruits:
        print(f"- {fruit}")

    # Looping through a string
    print("\nLetters in 'Python':")
    for letter in "Python":
        print(letter)

    # Looping a specific number of times using range()
    # range(5) generates numbers from 0 up to (but not including) 5
    print("\nCounting to 4:")
    for i in range(5):
        print(i)

    # range(start, stop, step)
    print("\nEven numbers under 10:")
    for num in range(0, 10, 2):
        print(num)
    ```

*   **`while` Loop:** Executes a block of code as long as its condition remains `True`. It's important to ensure the condition eventually becomes `False` to avoid an infinite loop.

    ```python
    count = 0
    print("\nWhile loop countdown:")
    while count < 3:
        print(f"Count is {count}")
        count += 1 # Increment count - crucial to eventually stop the loop
    print("While loop finished.")

    # Example: Waiting for user input
    # (This example would run indefinitely in a script without user interaction)
    # command = ""
    # while command.lower() != "quit":
    #     command = input("Enter command ('quit' to exit): ")
    #     print(f"You entered: {command}")
    ```

**Loop Control Statements:**

*   **`break`:** Immediately exits the current loop (the innermost loop if nested).
*   **`continue`:** Skips the rest of the current iteration and proceeds to the next iteration of the loop.

```python
print("\nLoop control examples:")
print("Finding first number divisible by 3:")
for number in range(1, 10):
    if number % 3 == 0:
        print(f"Found it: {number}")
        break # Exit the loop once found
    print(f"Checking {number}...")

print("\nPrinting odd numbers using continue:")
for number in range(1, 10):
    if number % 2 == 0:
        continue # Skip the rest of the loop for even numbers
    print(f"Odd number: {number}")
```

**Exercise (Manual Coding):**

1.  Write an `if-elif-else` statement that checks a variable `score`.
    *   If `score` is 90 or above, print "Grade: A".
    *   If `score` is 80 or above (but less than 90), print "Grade: B".
    *   If `score` is 70 or above (but less than 80), print "Grade: C".
    *   Otherwise, print "Grade: F".
    Test it with different values for `score`.
2.  Write a `for` loop that prints all the numbers from 1 to 10 (inclusive).
3.  Write a `while` loop that starts with `x = 10` and prints `x` as long as `x` is greater than 0. Decrement `x` by 1 in each iteration.
4.  Modify the `for` loop from exercise 2 to use `continue` to skip printing the number 5.

Mastering control structures is essential for creating programs that can react to different situations and handle repetitive tasks efficiently. Next, we'll learn how to bundle code into reusable blocks called functions.
