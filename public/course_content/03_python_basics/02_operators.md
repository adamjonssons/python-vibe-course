## Lesson 3.2: Operators

Operators are special symbols in Python that perform operations on values (operands). You use them to manipulate variables and data.

**1. Arithmetic Operators:**

These perform standard mathematical calculations.

```python
a = 10
b = 3

print(f"{a} + {b} = {a + b}")   # Addition: Output: 10 + 3 = 13
print(f"{a} - {b} = {a - b}")   # Subtraction: Output: 10 - 3 = 7
print(f"{a} * {b} = {a * b}")   # Multiplication: Output: 10 * 3 = 30
print(f"{a} / {b} = {a / b}")   # True Division (results in float): Output: 10 / 3 = 3.333...
print(f"{a} // {b} = {a // b}")  # Floor Division (discards remainder, results in int): Output: 10 // 3 = 3
print(f"{a} % {b} = {a % b}")   # Modulus (remainder of division): Output: 10 % 3 = 1
print(f"{a} ** {b} = {a ** b}") # Exponentiation (a to the power of b): Output: 10 ** 3 = 1000
```

**2. Comparison (Relational) Operators:**

These compare two values and return a Boolean (`True` or `False`).

```python
x = 5
y = 8

print(f"{x} == {y} is {x == y}") # Equal to: Output: 5 == 8 is False
print(f"{x} != {y} is {x != y}") # Not equal to: Output: 5 != 8 is True
print(f"{x} > {y} is {x > y}")  # Greater than: Output: 5 > 8 is False
print(f"{x} < {y} is {x < y}")  # Less than: Output: 5 < 8 is True
print(f"{x} >= {y} is {x >= y}") # Greater than or equal to: Output: 5 >= 8 is False
print(f"{x} <= {y} is {x <= y}") # Less than or equal to: Output: 5 <= 8 is True
```

**3. Logical Operators:**

These combine Boolean values.

*   `and`: Returns `True` if *both* operands are `True`.
*   `or`: Returns `True` if *at least one* operand is `True`.
*   `not`: Reverses the Boolean value ( `True` becomes `False`, `False` becomes `True`).

```python
is_sunny = True
is_warm = False

print(f"Go to beach? {is_sunny and is_warm}")  # Output: Go to beach? False
print(f"Wear jacket? {not is_warm}")         # Output: Wear jacket? True
print(f"Go outside? {is_sunny or is_warm}")   # Output: Go outside? True
```

**4. Assignment Operators:**

These are used to assign values to variables. We've already used the basic assignment operator (`=`). There are also shorthand operators that combine an arithmetic operation with assignment.

```python
counter = 0
counter = counter + 1  # Standard increment
print(f"Counter: {counter}") # Output: Counter: 1

counter += 1 # Shorthand for counter = counter + 1
print(f"Counter: {counter}") # Output: Counter: 2

value = 100
value -= 20 # Shorthand for value = value - 20
print(f"Value: {value}")   # Output: Value: 80

multiplier = 5
multiplier *= 3 # Shorthand for multiplier = multiplier * 3
print(f"Multiplier: {multiplier}") # Output: Multiplier: 15

# Similar shorthand exists for /, //, %, **
```

**5. Membership Operators (`in`, `not in`):**

Check if a sequence (like a string, list, or tuple - more on these later) contains a specific value.

```python
course_title = "Python Vibe Coding"

print(f"'Vibe' in course_title? {'Vibe' in course_title}")     # Output: 'Vibe' in course_title? True
print(f"'Java' in course_title? {'Java' in course_title}")     # Output: 'Java' in course_title? False
print(f"'Code' not in course_title? {'Code' not in course_title}") # Output: 'Code' not in course_title? False
```

**6. Identity Operators (`is`, `is not`):**

Check if two variables refer to the *exact same object* in memory (not just if they have the same value).

```python
a = [1, 2, 3] # A list (we'll cover lists soon)
b = [1, 2, 3]
c = a

print(f"a == b? {a == b}") # Checks if values are equal: Output: a == b? True
print(f"a is b? {a is b}") # Checks if they are the same object: Output: a is b? False
print(f"a is c? {a is c}") # c points to the same object as a: Output: a is c? True
print(f"a is not b? {a is not b}") # Output: a is not b? True
```

**Operator Precedence:**

Python follows an order of operations (like PEMDAS/BODMAS in math). For example, `**` is performed before `*` or `/`, which are performed before `+` or `-`. Use parentheses `()` to control the order when needed.

```python
result = 5 + 2 * 3 # Multiplication first
print(result)      # Output: 11

result = (5 + 2) * 3 # Parentheses first
print(result)      # Output: 21
```

**Exercise (Manual Coding):**

1.  Define two integer variables, `num1 = 15` and `num2 = 4`.
2.  Calculate and print the result of `num1` floor divided by `num2`.
3.  Calculate and print the remainder when `num1` is divided by `num2`.
4.  Create two boolean variables, `has_key = True` and `door_locked = False`.
5.  Write an expression using logical operators to determine if you can open the door (you can open it if you have the key AND the door is not locked). Print the result.
6.  Use a shorthand assignment operator to add 10 to `num1` and print the new value of `num1`.
7.  Check if the substring "Py" is present in the string "Python" and print the result.
