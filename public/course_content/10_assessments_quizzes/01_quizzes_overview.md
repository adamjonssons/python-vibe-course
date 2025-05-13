# Module 10: Assessments and Quizzes

This module provides examples of quizzes and coding challenges designed to test your comprehension of the concepts covered in each section. These can be attempted manually or with AI assistance, but remember the goal is to solidify your understanding.

**Quiz Format:**
*   **Multiple Choice:** Select the best answer(s) from the given options.
*   **Coding Challenges:** Write short Python scripts or functions to solve specific problems.

*(Note: The actual implementation on the website would involve interactive elements to present these questions and check answers. These are markdown representations.)*

## Quiz 1: Python Basics (Module 3)

**Part 1: Multiple Choice**

1.  Which of the following is a valid variable name in Python?
    a) `2nd_variable`
    b) `variable-name`
    c) `_my_variable`
    d) `global`

2.  What is the data type of the value `15.0`?
    a) `int`
    b) `str`
    c) `bool`
    d) `float`

3.  What is the result of the expression `10 // 3`?
    a) `3.333...`
    b) `1`
    c) `3`
    d) `103`

4.  Which operator checks if two variables refer to the exact same object in memory?
    a) `==`
    b) `!=`
    c) `is`
    d) `in`

5.  What will the following code print?
    ```python
    count = 0
    while count < 3:
        print(count)
        count += 1
    ```
    a) 0 1 2 3
    b) 1 2 3
    c) 0 1 2
    d) 1 2

**Part 2: Coding Challenges**

1.  **Sum of Numbers:** Write a function `sum_list(numbers)` that takes a list of numbers and returns their sum. Test it with `[1, 2, 3, 4, 5]`.
2.  **FizzBuzz:** Write a script that prints numbers from 1 to 20. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

---

## Quiz 2: Intermediate Python (Module 4)

**Part 1: Multiple Choice**

1.  In Object-Oriented Programming, what is a "class"?
    a) A specific instance of an object.
    b) A blueprint or template for creating objects.
    c) A function defined inside a class.
    d) A variable shared by all instances of a class.

2.  What is the primary purpose of the `__init__` method in a Python class?
    a) To destroy an object.
    b) To define class attributes.
    c) To initialize the state of a new object when it is created.
    d) To inherit methods from a parent class.

3.  Which data structure is an unordered collection of unique, immutable items?
    a) `list`
    b) `dict`
    c) `set`
    d) `tuple` (Though tuples are immutable, they are ordered)

4.  What mode should you use with `open()` to add content to the end of an existing file without deleting its current content?
    a) `'r'`
    b) `'w'`
    c) `'a'`
    d) `'r+'`

5.  What does the `super()` function typically do inside a child class's `__init__` method?
    a) Calls a method from the child class itself.
    b) Calls a method from the parent class.
    c) Creates a new instance of the parent class.
    d) Checks if a class is a superclass.

**Part 2: Coding Challenges**

1.  **Class Creation:** Define a `Rectangle` class. Its `__init__` method should take `width` and `height`. It should have a method `calculate_area()` that returns the area and a method `calculate_perimeter()` that returns the perimeter.
2.  **Dictionary Manipulation:** Given the dictionary `stock = {"apple": 50, "banana": 20, "orange": 35}`, write code to:
    a) Print the quantity of "banana".
    b) Add a new fruit "grape" with a quantity of 40.
    c) Increase the quantity of "apple" by 10.
    d) Print the final dictionary.
3.  **File Reading:** Write a function `count_lines(filepath)` that takes a file path, opens the file, counts the number of lines in it, and returns the count. Use `with open(...)` and handle potential `FileNotFoundError`.

---

## Quiz 3: Advanced Python & Vibe Coding (Modules 5 & 6)

**Part 1: Multiple Choice**

1.  What is a key benefit of using Python generators?
    a) They allow modification of function behavior externally.
    b) They are always faster than lists for all operations.
    c) They are memory efficient for large sequences due to lazy evaluation.
    d) They automatically handle asynchronous operations.

2.  What is the primary purpose of the `@` syntax in Python when placed above a function definition?
    a) To define a class method.
    b) To apply a decorator to the function.
    c) To indicate a private function.
    d) To start a generator function.

3.  Which keyword is used within an `async def` function to pause execution and wait for another coroutine to complete?
    a) `yield`
    b) `return`
    c) `await`
    d) `async`

4.  When making an HTTP request to retrieve data from a REST API, which HTTP method is typically used?
    a) `POST`
    b) `PUT`
    c) `DELETE`
    d) `GET`

5.  When using an AI coding assistant, why is it crucial to review the generated code?
    a) Because the AI charges per line of code.
    b) Because AI code is always perfect and needs no changes.
    c) Because AI might generate incorrect, inefficient, or insecure code, and you are ultimately responsible.
    d) Because AI tools only work if you review the code.

**Part 2: Coding Challenges**

1.  **API Call:** Using the `requests` library, write a function `get_post_title(post_id)` that takes an integer `post_id`, fetches data from `https://jsonplaceholder.typicode.com/posts/{post_id}`, and returns the `title` of the post. Handle potential request errors and the case where the post is not found.
2.  **Decorator Usage:** Write a simple decorator `print_args` that prints the arguments (`*args`, `**kwargs`) passed to any function it decorates before the function is called. Apply it to a function that takes two numbers and returns their sum.
3.  **AI Interaction (Conceptual):** Describe the steps you would take, including the prompts or comments you might write, to get an AI assistant to help you generate a Python function that reads a CSV file named `data.csv` using `pandas` and returns the average value of a column named `score`.
