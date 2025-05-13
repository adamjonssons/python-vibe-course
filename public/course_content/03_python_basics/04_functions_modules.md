## Lesson 3.4: Functions and Modules

As programs grow larger, it becomes essential to organize code into reusable blocks. Functions and modules are key concepts for achieving this organization and avoiding repetition.

**1. Functions**

A function is a named block of code that performs a specific task. You define a function once and can then *call* it multiple times whenever you need to perform that task.

**Defining a Function:**

Use the `def` keyword, followed by the function name, parentheses `()`, and a colon `:`. The code block within the function must be indented.

```python
# Define a simple function
def greet():
    print("Hello from the function!")

# Call the function
greet() # Output: Hello from the function!
greet() # Call it again
```

**Functions with Parameters (Input):**

Functions can accept input values, called *parameters* (or arguments when you call the function). These are defined inside the parentheses in the function definition.

```python
def greet_user(name): # 'name' is a parameter
    print(f"Hello, {name}!")

greet_user("Alice") # "Alice" is the argument passed to the 'name' parameter. Output: Hello, Alice!
greet_user("Bob")   # Output: Hello, Bob!

# Function with multiple parameters
def add_numbers(num1, num2):
    sum_result = num1 + num2
    print(f"{num1} + {num2} = {sum_result}")

add_numbers(5, 3) # Output: 5 + 3 = 8
add_numbers(100, -50) # Output: 100 + -50 = 50
```

**Functions with Return Values (Output):**

Functions can send a value back to the part of the program that called them using the `return` keyword. If `return` is not used, the function implicitly returns `None`.

```python
def multiply_numbers(num1, num2):
    product = num1 * num2
    return product # Send the calculated product back

result = multiply_numbers(6, 7)
print(f"The result is: {result}") # Output: The result is: 42

# You can use the returned value directly
if multiply_numbers(5, 5) > 20:
    print("5 times 5 is greater than 20")

# Function returning a boolean
def is_even(number):
    return number % 2 == 0

print(f"Is 10 even? {is_even(10)}") # Output: Is 10 even? True
print(f"Is 7 even? {is_even(7)}")   # Output: Is 7 even? False
```

**Default Parameter Values:**

You can provide default values for parameters. If an argument is not provided for that parameter when the function is called, the default value is used.

```python
def power(base, exponent=2): # exponent defaults to 2 if not provided
    return base ** exponent

print(power(5))    # Uses default exponent 2. Output: 25
print(power(5, 3)) # Provides exponent 3. Output: 125
```

**Variable Scope:**

Variables defined *inside* a function are *local* to that function – they only exist while the function is running and cannot be accessed from outside.
Variables defined *outside* any function are *global* and can generally be accessed (but not easily modified) from within functions.

```python
global_var = "I am global"

def my_func():
    local_var = "I am local"
    print(local_var)
    print(global_var) # Can access global variables

my_func()
# print(local_var) # This would cause a NameError because local_var is not defined here
```

**2. Modules**

A module is simply a Python file (`.py`) containing Python definitions and statements (like functions, classes, variables). Modules allow you to logically organize your code into separate files and reuse code across different programs.

**Using Modules (`import`):**

To use the code from another module, you need to `import` it.

*   **Importing the whole module:**

    ```python
    # Assume we have a file named 'my_math_helpers.py' with:
    # def add(x, y):
    #     return x + y
    # PI = 3.14159

    import my_math_helpers # Import the entire module

    sum_val = my_math_helpers.add(10, 5) # Access functions using module_name.function_name
    print(sum_val) # Output: 15
    print(my_math_helpers.PI)
    ```

*   **Importing specific items:**

    ```python
    from my_math_helpers import add, PI # Import only specific items

    sum_val = add(20, 7) # Can use the function directly
    print(sum_val) # Output: 27
    print(PI)
    ```

*   **Importing with an alias:**

    ```python
    import my_math_helpers as mmh # Import with a shorter alias

    sum_val = mmh.add(1, 2)
    print(sum_val) # Output: 3
    print(mmh.PI)
    ```

**Python's Standard Library:**

Python comes with a vast *standard library* – a collection of built-in modules providing tools for many common tasks (math operations, working with files, networking, dates and times, etc.). You don't need to install these separately; you just import them.

```python
import math # Module for mathematical functions
import random # Module for generating random numbers
import datetime # Module for working with dates and times

print(math.sqrt(16)) # Output: 4.0
print(random.randint(1, 10)) # Output: A random integer between 1 and 10 (inclusive)
print(datetime.date.today()) # Output: The current date
```

**Exercise (Manual Coding):**

1.  Define a function called `calculate_area` that takes two parameters, `length` and `width`, and returns their product.
2.  Call the `calculate_area` function with `length=10` and `width=5` and print the result.
3.  Define a function called `print_greeting` that takes one parameter `name` with a default value of "Guest". The function should print "Welcome, [name]!".
4.  Call `print_greeting` without any arguments.
5.  Call `print_greeting` with the argument "Student".
6.  Import the `math` module and use its `pow()` function to calculate 2 raised to the power of 8. Print the result.

Functions and modules are fundamental to writing clean, organized, and reusable Python code. They form the backbone of larger applications.
