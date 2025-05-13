## Lesson 4.3: Data Structures (Lists, Dictionaries, Sets)

Python provides several built-in data structures that allow you to store and organize collections of data efficiently. The most common ones are lists, dictionaries, and sets.

**1. Lists (`list`)**

A list is an **ordered, mutable (changeable)** sequence of items. Lists can contain items of different data types.

*   **Creating Lists:** Use square brackets `[]`, separating items with commas.
*   **Accessing Items:** Use zero-based indexing (`my_list[0]`, `my_list[1]`, etc.) and slicing (`my_list[1:3]`).
*   **Modifying Lists:** Assign new values to indices (`my_list[0] = 'new_value'`), use methods like `append()`, `insert()`, `remove()`, `pop()`.

```python
# Creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
mixed_list = [1, "hello", 3.14, True]

print(f"Numbers: {numbers}")
print(f"Fruits: {fruits}")

# Accessing items
print(f"First fruit: {fruits[0]}")      # Output: First fruit: apple
print(f"Last number: {numbers[-1]}")     # Output: Last number: 5 (negative indexing)
print(f"Slice of numbers: {numbers[1:4]}") # Output: Slice of numbers: [2, 3, 4] (index 1 up to, not including, 4)

# Modifying lists
fruits[1] = "blueberry" # Change the second item
print(f"Fruits after change: {fruits}") # Output: Fruits after change: ["apple", "blueberry", "cherry"]

fruits.append("orange") # Add item to the end
print(f"Fruits after append: {fruits}") # Output: Fruits after append: ["apple", "blueberry", "cherry", "orange"]

fruits.insert(1, "banana") # Insert item at index 1
print(f"Fruits after insert: {fruits}") # Output: Fruits after insert: ["apple", "banana", "blueberry", "cherry", "orange"]

fruits.remove("cherry") # Remove the first occurrence of "cherry"
print(f"Fruits after remove: {fruits}") # Output: Fruits after remove: ["apple", "banana", "blueberry", "orange"]

popped_fruit = fruits.pop() # Remove and return the last item
print(f"Popped fruit: {popped_fruit}") # Output: Popped fruit: orange
print(f"Fruits after pop: {fruits}")   # Output: Fruits after pop: ["apple", "banana", "blueberry"]

# Other useful methods: len(), sort(), reverse(), count(), index()
print(f"Number of fruits: {len(fruits)}") # Output: Number of fruits: 3
```

**2. Dictionaries (`dict`)**

A dictionary is an **unordered (in Python < 3.7, ordered in >= 3.7), mutable** collection of **key-value pairs**. Each key must be unique and immutable (e.g., strings, numbers, tuples).

*   **Creating Dictionaries:** Use curly braces `{}`, with `key: value` pairs separated by commas.
*   **Accessing Values:** Use the key inside square brackets (`my_dict['key']`). Using a non-existent key raises a `KeyError`. Use the `get()` method for safer access (returns `None` or a default value if the key is not found).
*   **Modifying Dictionaries:** Assign values using keys (`my_dict['new_key'] = 'new_value'`), use `pop()` to remove items by key.

```python
# Creating dictionaries
empty_dict = {}
student = {
    "name": "Alice",
    "major": "Computer Science",
    "gpa": 3.8,
    "is_active": True
}

print(f"Student: {student}")

# Accessing values
print(f"Student name: {student['name']}") # Output: Student name: Alice
# print(student['id']) # This would cause a KeyError

print(f"Student major (safe): {student.get('major')}") # Output: Student major (safe): Computer Science
print(f"Student ID (safe): {student.get('id')}")       # Output: Student ID (safe): None
print(f"Student ID (safe w/ default): {student.get('id', 'Not Assigned')}") # Output: Student ID (safe w/ default): Not Assigned

# Modifying dictionaries
student['gpa'] = 3.9 # Update existing value
student['email'] = 'alice@example.com' # Add a new key-value pair
print(f"Updated student: {student}")

removed_value = student.pop('is_active') # Remove item by key
print(f"Removed value: {removed_value}") # Output: Removed value: True
print(f"Student after pop: {student}")

# Other useful methods: keys(), values(), items(), len()
print(f"Student keys: {student.keys()}")
print(f"Student values: {student.values()}")
print(f"Student items (key-value tuples): {student.items()}")

# Looping through dictionaries
print("\nStudent details:")
for key, value in student.items():
    print(f"- {key.capitalize()}: {value}")
```

**3. Sets (`set`)**

A set is an **unordered, mutable** collection of **unique, immutable** items. Sets are useful for membership testing and eliminating duplicate entries.

*   **Creating Sets:** Use curly braces `{}` with comma-separated items, or the `set()` function on an iterable. Note: `{}` creates an empty dictionary, use `set()` for an empty set.
*   **Adding/Removing Items:** Use `add()` to add a single item, `update()` to add multiple items from an iterable, `remove()` to remove an item (raises `KeyError` if not found), `discard()` to remove an item (does nothing if not found).
*   **Set Operations:** Perform mathematical set operations like union (`|`), intersection (`&`), difference (`-`), symmetric difference (`^`).

```python
# Creating sets
empty_set = set()
numbers_set = {1, 2, 3, 4, 4, 5} # Duplicates are automatically removed
letters_set = set("hello") # Creates set from characters

print(f"Empty set: {empty_set}")
print(f"Numbers set: {numbers_set}") # Output: Numbers set: {1, 2, 3, 4, 5}
print(f"Letters set: {letters_set}") # Output: Letters set: {"o", "h", "l", "e"} (order may vary)

# Adding and removing items
numbers_set.add(6)
print(f"Set after add: {numbers_set}")

numbers_set.update([5, 6, 7, 8])
print(f"Set after update: {numbers_set}")

numbers_set.remove(3) # Remove 3
# numbers_set.remove(10) # This would cause a KeyError
print(f"Set after remove: {numbers_set}")

numbers_set.discard(2) # Remove 2 if present
numbers_set.discard(10) # Does nothing, 10 is not in the set
print(f"Set after discard: {numbers_set}")

# Membership testing (very efficient in sets)
print(f"Is 5 in the set? {5 in numbers_set}") # Output: Is 5 in the set? True
print(f"Is 10 in the set? {10 in numbers_set}") # Output: Is 10 in the set? False

# Set operations
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

print(f"Union (A | B): {set_a | set_b}")         # Output: Union (A | B): {1, 2, 3, 4, 5, 6}
print(f"Intersection (A & B): {set_a & set_b}")   # Output: Intersection (A & B): {3, 4}
print(f"Difference (A - B): {set_a - set_b}")     # Output: Difference (A - B): {1, 2}
print(f"Difference (B - A): {set_b - set_a}")     # Output: Difference (B - A): {5, 6}
print(f"Symmetric Diff (A ^ B): {set_a ^ set_b}") # Output: Symmetric Diff (A ^ B): {1, 2, 5, 6} (items in either A or B, but not both)
```

**Choosing the Right Data Structure:**

*   Use a **list** when order matters and you need to store duplicates.
*   Use a **dictionary** when you need to associate keys with values for fast lookups by key.
*   Use a **set** when you need to store unique items and perform efficient membership testing or set operations.

**Exercise (Manual Coding):**

1.  Create a list named `languages` containing "Python", "Java", and "C++".
2.  Append "JavaScript" to the `languages` list.
3.  Print the second language in the list.
4.  Create a dictionary named `capitals` where the keys are "USA", "France", "Japan" and the values are "Washington D.C.", "Paris", "Tokyo".
5.  Print the capital of France.
6.  Add a new key-value pair to `capitals`: "Germany": "Berlin".
7.  Create a set named `unique_colors` from the list `["red", "blue", "green", "red", "yellow", "blue"]`.
8.  Print the `unique_colors` set.
9.  Check if "green" is in the `unique_colors` set and print the result.

Understanding these core data structures is vital for effectively managing data in your Python programs. Next, we'll learn how to work with files.
