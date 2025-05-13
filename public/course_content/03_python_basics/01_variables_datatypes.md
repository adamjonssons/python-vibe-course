# Module 3: Python Basics

Welcome to the core of Python programming! In this module, you'll learn the fundamental building blocks that form the basis of almost every Python program. We'll focus on writing the code manually first to build a strong foundation.

## Lesson 3.1: Variables and Data Types

Think of variables as containers or labels for storing data in your program. You give a variable a name, and then you can assign a value to it. Later, you can refer to the data by using the variable's name.

**Creating Variables:**

In Python, you create a variable simply by assigning a value to it using the equals sign (`=`):

```python
# Variable assignment
message = "Hello, learners!"
student_count = 25
price = 99.99
is_enrolled = True

# You can then print the values using the variable names
print(message)
print(student_count)
print(price)
print(is_enrolled)
```

**Variable Naming Rules:**

*   Must start with a letter (a-z, A-Z) or an underscore (`_`).
*   Can contain letters, numbers (0-9), and underscores.
*   Cannot be a Python keyword (like `if`, `else`, `for`, `while`, `def`, `class`, etc.). You can see a list by typing `import keyword; print(keyword.kwlist)` in a Python interpreter.
*   Are case-sensitive (`myVariable` is different from `myvariable`).
*   Convention: Use `snake_case` (all lowercase words separated by underscores) for variable names (e.g., `student_count`, `first_name`).

**Data Types:**

Variables can hold different *types* of data. Python automatically figures out the type based on the value you assign. The most common basic data types are:

1.  **String (`str`):** Represents text. Enclosed in single quotes (`'...'`) or double quotes (`"..."`).
    ```python
    course_name = "Python Vibe Coding"
    greeting = 'Welcome!'
    print(type(course_name)) # Output: <class 'str'>
    ```

2.  **Integer (`int`):** Represents whole numbers (positive, negative, or zero).
    ```python
    age = 30
    year = 2024
    temperature = -5
    print(type(age)) # Output: <class 'int'>
    ```

3.  **Float (`float`):** Represents numbers with a decimal point.
    ```python
    pi_approx = 3.14159
    item_price = 19.50
    print(type(item_price)) # Output: <class 'float'>
    ```

4.  **Boolean (`bool`):** Represents truth values, either `True` or `False` (note the capitalization).
    ```python
    is_active = True
    has_permission = False
    print(type(is_active)) # Output: <class 'bool'>
    ```

5.  **NoneType (`None`):** Represents the absence of a value. It's often used as a placeholder.
    ```python
    result = None
    print(type(result)) # Output: <class 'NoneType'>
    ```

**Type Conversion (Casting):**

You can sometimes convert data from one type to another using built-in functions like `str()`, `int()`, `float()`, and `bool()`.

```python
count_str = "50"
count_int = int(count_str) # Convert string to integer
print(count_int + 10) # Output: 60

price_float = 120.75
price_str = str(price_float) # Convert float to string
print("The price is: " + price_str)

# Be careful: converting incompatible values causes errors
# invalid_conversion = int("hello") # This would raise a ValueError
```

**Exercise (Manual Coding):**

1.  Create a variable named `planet` and assign it the string value "Earth".
2.  Create a variable named `moons` and assign it the integer value 1.
3.  Create a variable named `gravity_mps2` and assign it the float value 9.81.
4.  Create a variable named `is_inhabited` and assign it the boolean value `True`.
5.  Print the value and type of each variable.
6.  Try converting the `moons` variable to a float and print the result.
7.  Try converting the `gravity_mps2` variable to an integer and print the result (notice what happens to the decimal part).

Understanding variables and data types is fundamental. In the next lesson, we'll see how to perform operations on these variables.
