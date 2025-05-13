# Module 5: Advanced Python

Building upon the intermediate concepts, this module introduces more advanced Python features that enable you to write more elegant, efficient, and powerful code. We'll explore decorators, generators, asynchronous programming, working with APIs, and get a taste of popular frameworks.

## Lesson 5.1: Decorators and Generators

Decorators and generators are powerful constructs that leverage Python's functional programming capabilities.

**1. Decorators**

A decorator is a special kind of function that takes another function as input, adds some functionality to it (without modifying the original function's code directly), and returns the augmented function. They are often used for logging, access control, instrumentation, and more.

Decorators use the `@decorator_name` syntax placed directly above the function definition.

**Understanding the Concept (Functions as First-Class Objects):**

In Python, functions are first-class objects. This means you can:
*   Assign functions to variables.
*   Pass functions as arguments to other functions.
*   Return functions from other functions.

This is the foundation upon which decorators are built.

```python
# --- Foundation: Functions are first-class objects ---
def say_hello(name):
    return f"Hello, {name}!"

# Assign function to a variable
greet = say_hello
print(greet("World")) # Output: Hello, World!

# Pass function as an argument
def apply_func(func, value):
    return func(value)

print(apply_func(say_hello, "Alice")) # Output: Hello, Alice!

# Return a function from another function
def create_adder(x):
    def adder(y):
        return x + y
    return adder

add_5 = create_adder(5)
print(add_5(10)) # Output: 15

# --- Building a Simple Decorator ---

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func() # Call the original function
        print("Something is happening after the function is called.")
    return wrapper

# Applying the decorator using the @ syntax
@my_decorator
def say_whee():
    print("Whee!")

# Calling the decorated function
say_whee()
# Output:
# Something is happening before the function is called.
# Whee!
# Something is happening after the function is called.

# The @my_decorator syntax is equivalent to:
# def say_whee():
#     print("Whee!")
# say_whee = my_decorator(say_whee)

# --- Decorator with Arguments --- 
# Decorating functions that take arguments requires the wrapper to accept them
import functools

def decorator_with_args(func):
    @functools.wraps(func) # Preserves original function metadata (like name, docstring)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs) # Pass arguments to the original function
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@decorator_with_args
def add(a, b):
    """This function adds two numbers."""
    return a + b

sum_result = add(10, 5)
print(f"Final sum: {sum_result}")
print(f"Decorated function name: {add.__name__}") # Output: add (thanks to functools.wraps)
print(f"Decorated function docstring: {add.__doc__}") # Output: This function adds two numbers.

# Output:
# Calling add with args: (10, 5), kwargs: {}
# add returned: 15
# Final sum: 15
# Decorated function name: add
# Decorated function docstring: This function adds two numbers.
```

**2. Generators**

Generators provide a way to create iterators easily. An iterator is an object that can be looped over (like a list or string). Generators are defined like regular functions but use the `yield` keyword to return values one at a time, pausing execution and saving state between calls.

This is particularly useful for working with large sequences or data streams because generators produce values *on demand* (lazily), rather than creating the entire sequence in memory at once.

```python
# --- Regular function creating a list (memory intensive for large ranges) ---
def create_cubes_list(n):
    result = []
    for i in range(n):
        result.append(i**3)
    return result

cubes_list = create_cubes_list(5)
print(f"Cubes list: {cubes_list}") # Output: Cubes list: [0, 1, 8, 27, 64]

# --- Generator function (memory efficient) ---
def create_cubes_generator(n):
    print("Generator started...")
    for i in range(n):
        print(f"Yielding {i**3}")
        yield i**3 # Pauses here and returns the value
    print("Generator finished.")

# Create a generator object (code inside doesn't run yet)
cubes_gen = create_cubes_generator(5)
print(f"Generator object: {cubes_gen}")

# Iterate through the generator (code runs on demand)
print("\nIterating through generator:")
for cube in cubes_gen:
    print(f"Received: {cube}")

# Trying to iterate again - generator is exhausted
print("\nTrying to iterate again:")
for cube in cubes_gen:
    print(f"This won't print: {cube}") # No output here

# You can also use next() to get values one by one
cubes_gen_manual = create_cubes_generator(3)
print("\nManual iteration with next():")
print(next(cubes_gen_manual)) # Runs until the first yield
print(next(cubes_gen_manual)) # Resumes and runs until the next yield
print(next(cubes_gen_manual)) # Resumes and runs until the last yield
# print(next(cubes_gen_manual)) # This would raise StopIteration error

# --- Generator Expressions (Concise syntax) ---
# Similar to list comprehensions, but create generators
squares_gen = (x*x for x in range(5))
print(f"\nGenerator expression object: {squares_gen}")
print(f"Sum of squares from generator: {sum(squares_gen)}") # Output: 30 (0+1+4+9+16)
```

**Benefits of Generators:**

*   **Memory Efficiency:** Ideal for large datasets as they don't store the entire sequence in memory.
*   **Lazy Evaluation:** Values are generated only when needed.
*   **Simpler Code:** Can make code for creating iterators much cleaner than manually implementing iterator classes.

**Exercise (Manual Coding):**

1.  **Decorator:**
    *   Write a decorator called `timer` that measures the time a function takes to execute. It should print "Executing [function_name]..." before calling the function and "[function_name] finished in X.XXX seconds." after.
    *   Use `time.time()` from the `time` module to get the current time before and after the function call.
    *   Apply this decorator to a simple function, perhaps one that calculates the sum of numbers up to a large value or sleeps for a second (`time.sleep(1)`).
2.  **Generator:**
    *   Write a generator function called `fibonacci_sequence(limit)` that yields Fibonacci numbers up to (but not exceeding) the given `limit`. (The Fibonacci sequence starts 0, 1, 1, 2, 3, 5, 8... where each number is the sum of the two preceding ones).
    *   Use a `for` loop to iterate through the generator created by `fibonacci_sequence(100)` and print each number.

Decorators and generators are powerful tools for writing more concise, efficient, and expressive Python code.
